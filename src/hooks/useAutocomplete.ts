import { useEffect, useReducer, useRef } from 'react';
import axios, { CancelTokenSource } from 'axios';

import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import {
  transformResponseData,
  formatUrl,
} from '@/components/SearchCity/AutocompleteSearch/utils';
import { useNetworkStatus } from '@/components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from '@/components/Contexts/NetworkNotificationContext';
import { HandleInputChangeCallback } from '@/components/SearchCity/AutocompleteSearch/';

interface State {
  data: {};
  loading: boolean;
  error: Error | null;
  isOpen: boolean;
}

const initialState: State = {
  data: {},
  loading: false,
  error: null,
  isOpen: true,
};

function reducer(state: State, newState: Partial<State>) {
  return { ...state, ...newState };
}

export default function useAutocomplete(
  value: string,
  onChange: HandleInputChangeCallback,
) {
  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  const [state, setState] = useReducer(reducer, initialState);
  const cancelTokenSource = useRef<CancelTokenSource | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
            cancelToken: cancelTokenSource.current!.token,
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
      setShowNotification(true);
    }

    return () => {
      if (isOnline) {
        setState({ loading: false });
        cancelTokenSource.current!.cancel();
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
