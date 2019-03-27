import { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

import LocalStorage from 'utils/localStorage';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const reducer = (state, newState) => {
  return { ...state, ...newState };
};

export default function useFetchForecast({ url, options, cb }) {
  const [state, setState] = useReducer(reducer, initialState);
  const cancelTokenSource = useRef(null);
  const isMounted = useRef(false);

  async function fetchData() {
    try {
      setState({ ...initialState, loading: true });

      const { data } = await axios.get(formatUrl(url, options), {
        cancelToken: cancelTokenSource.current.token
      });

      const transformedData = cb(data);

      setState({
        data: transformedData,
        loading: false
      });

      LocalStorage.set(options.filter, transformedData);
    } catch (error) {
      /*
        if something went wrong during the process of fetching data and
        it's not an error caused by cancelling request then put the error in the state
      */
      if (isMounted.current && !axios.isCancel(error)) {
        setState({
          loading: false,
          error
        });
      }

      isMounted.current = false;
    }
  }

  useEffect(() => {
    isMounted.current = true;

    // check if data exists in local storage and use them
    const dataFromLocalStorage = LocalStorage.get(options.filter);
    if (dataFromLocalStorage && !options.isFreshDataRequested) {
      setState({ data: dataFromLocalStorage });
    } else {
      cancelTokenSource.current = axios.CancelToken.source();

      fetchData();
    }
    return () => {
      // cancel pending request before component will unmount
      if (!dataFromLocalStorage) {
        cancelTokenSource.current.cancel();
      }

      isMounted.current = false;
    };
  }, [
    options.cityId,
    options.language,
    options.filter,
    options.isFreshDataRequested
  ]);

  return state;
}

function formatUrl(
  url,
  { cityId, language = 'en', details = true, metric = true }
) {
  return `${url}/${cityId}?${setQuery(language, details, metric)}`;
}

function setQuery(language, details, metric) {
  return `apikey=${
    process.env.REACT_APP_ACCUWEATHER_KEY
  }&language=${language}&details=${details}&metric=${metric}`;
}
