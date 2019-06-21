import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';

import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import { LocalStorageFields as Fields } from '@/constants/localStorageFields';

interface IWeatherContext {
  cityId: string | null;
  setCityId: React.Dispatch<React.SetStateAction<string | null>>;
}

const WeatherContext = createContext<IWeatherContext | null>(null);

function WeatherProvider({ children }: { children?: React.ReactNode }) {
  const [cityId, setCityId] = useState<string | null>(null);
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
