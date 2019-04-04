import React from 'react';

import ForecastTabs from './ForecastTabs';
import ForecastHeader from './ForecastHeader';

function WeatherForecast() {
  return (
    <>
      <ForecastHeader />
      <ForecastTabs />
    </>
  );
}

export default WeatherForecast;
