import { useEffect, useReducer, useRef } from 'react';
import axios, { CancelTokenSource } from 'axios';

import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import { useNetworkStatus } from '@/components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from '@/components/Contexts/NetworkNotificationContext';
import { Forecast } from '@/components/WeatherForecast/ForecastTabs/utils';

export interface ForecastState {
  data: Forecast | null;
  loading: boolean;
  error: Error | null;
}

const initialState: ForecastState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state: ForecastState, newState: Partial<ForecastState>) => {
  return { ...state, ...newState };
};

export default function useFetchForecast({
  url,
  options,
  cb,
}: any): ForecastState {
  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  const [state, setState] = useReducer(reducer, initialState);
  const cancelTokenSource = useRef<CancelTokenSource | null>(null);
  const isMounted = useRef(false);

  async function fetchData() {
    try {
      setState({ ...initialState, loading: true });

      const { data } = await axios.get(formatUrl(url, options), {
        cancelToken: cancelTokenSource.current!.token,
      });

      const transformedData = cb(data);

      setState({
        data: transformedData,
        loading: false,
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
          error,
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
      if (isOnline) {
        fetchData();
      } else {
        setShowNotification(true);
      }
    }
    return () => {
      // cancel pending request before component will unmount
      if (!dataFromLocalStorage) {
        cancelTokenSource.current!.cancel();
      }

      isMounted.current = false;
    };
  }, [
    options.cityId,
    options.language,
    options.filter,
    options.isFreshDataRequested,
  ]);

  return state;
}

function formatUrl(
  url: string,
  {
    cityId,
    language = 'en',
    details = true,
    metric = true,
  }: { cityId: number; language: string; details: boolean; metric: boolean },
) {
  return `${url}/${cityId}?${setQuery(language, details, metric)}`;
}

function setQuery(language: string, details: boolean, metric: boolean) {
  return `apikey=${
    process.env.REACT_APP_ACCUWEATHER_KEY
  }&language=${language}&details=${details}&metric=${metric}`;
}
