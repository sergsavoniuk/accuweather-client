import React from 'react';

import ForecastForDayCard from './ForecastForDayCard';
import { Wrapper } from './ForecastFor5Days.components';
import { TransformedFor5DaysForecast } from '@/components/WeatherForecast/ForecastTabs/utils';

export interface ForecastFor5DaysProps {
  data: TransformedFor5DaysForecast[];
}

function ForecastFor5Days({ data = [] }: ForecastFor5DaysProps) {
  return (
    <Wrapper>
      {data.map(forecast => (
        <ForecastForDayCard key={forecast.date} forecast={forecast} />
      ))}
    </Wrapper>
  );
}

export default ForecastFor5Days;
