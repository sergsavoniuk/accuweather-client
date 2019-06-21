import React from 'react';

import ForecastTabs from './ForecastTabs';
import ForecastHeader from './ForecastHeader';
import { useWeatherHook } from '@/components/Contexts/WeatherContext';

function WeatherForecast() {
  const { cityId } = useWeatherHook();

  return cityId ? (
    <>
      <ForecastHeader />
      <ForecastTabs />
    </>
  ) : null;
}

export default WeatherForecast;
