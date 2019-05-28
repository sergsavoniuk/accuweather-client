import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';

import LocalStorage from 'utils/localStorage';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [cityId, setCityId] = useState(null);
  const value = useMemo(() => ({ cityId, setCityId }), [cityId]);

  useEffect(() => {
    const cityId = LocalStorage.get(Fields.cityId);
    if (cityId) {
      setCityId(cityId);
    }
  }, [cityId]);

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

function useWeatherHook() {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeatherHook must be used within a WeatherProvider');
  }

  const { cityId, setCityId } = context;
  const updateCityId = useCallback(cityId => setCityId(cityId), [setCityId]);

  return {
    cityId,
    updateCityId,
  };
}

export { WeatherProvider, useWeatherHook };
