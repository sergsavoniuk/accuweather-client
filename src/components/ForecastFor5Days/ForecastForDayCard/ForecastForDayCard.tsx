import React from 'react';

import CardHeader from './CardHeader';
import ForecastStatistics from './ForecastStatistics';
import {
  CardContainer,
  Wrapper,
  Separator,
} from './ForecastForDayCard.components';
import { TransformedFor5DaysForecast } from '@/components/WeatherForecast/ForecastTabs/utils';

interface Props {
  forecast: TransformedFor5DaysForecast;
}

function ForecastForDayCard({
  forecast: { date: datetime, day, night },
}: Props) {
  return (
    <CardContainer>
      <CardHeader date={datetime} />
      <Wrapper>
        <ForecastStatistics forecast={day} title="day" />
        <Separator />
        <ForecastStatistics forecast={night} title="night" />
      </Wrapper>
    </CardContainer>
  );
}

export default ForecastForDayCard;
