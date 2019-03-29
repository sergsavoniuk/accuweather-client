import { useEffect, useReducer, useRef, useContext } from 'react';
import axios from 'axios';

import NetworkNotificationContext from 'components/Contexts/NetworkNotificationContext';
import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import LocalStorage from 'utils/localStorage';
import {
  transformResponseData,
  formatUrl,
} from 'components/SearchCity/AutocompleteSearch/utils';

const initialState = {
  data: {},
  loading: false,
  error: null,
  isOpen: true,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

export default function useAutocomplete(value, onChange) {
  const setShowOfflineNotification = useContext(NetworkNotificationContext);
  const isOnline = useContext(NetworkStatusContext);

  const [state, setState] = useReducer(reducer, initialState);
  const cancelTokenSource = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    onChange({ key: null, value });
  }

  function handleFocus() {
    if (value.length > 0) {
      setState({ isOpen: true });
    }
  }

  function handleBlur() {
    if (state.isOpen) {
      setTimeout(() => {
        setState({ isOpen: false });
      }, 200);
    }
  }

  async function fetchData() {
    if (value !== '') {
      try {
        setState({ loading: true });

        const data = await axios(
          formatUrl({
            query: value,
            language: LocalStorage.get('language'),
          }),
          {
            cancelToken: cancelTokenSource.current.token,
          },
        );

        setState({
          data: transformResponseData(data),
          loading: false,
        });
      } catch (error) {
        if (!axios.isCancel(error)) {
          setState({ error });
        }
      }
    } else {
      setState({ data: {} });
    }
  }

  useEffect(() => {
    cancelTokenSource.current = axios.CancelToken.source();

    if (isOnline) {
      fetchData();
    } else {
      setShowOfflineNotification(true);
    }

    return () => {
      if (isOnline) {
        setState({ loading: false });
        cancelTokenSource.current.cancel();
      }
    };
  }, [value]);

  return {
    ...state,
    handleChange,
    handleBlur,
    handleFocus,
  };
}
