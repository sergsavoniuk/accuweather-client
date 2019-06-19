import React from 'react';

import CardHeader from './CardHeader';
import ForecastStatistics, { ForecastProps } from './ForecastStatistics';
import {
  CardContainer,
  Wrapper,
  Separator,
} from './ForecastForDayCard.components';

export interface ForecastMetaProps {
  date: string;
  day: ForecastProps;
  night: ForecastProps;
}

interface Props {
  forecast: ForecastMetaProps;
}

function ForecastForDayCard({ forecast: { date, day, night } }: Props) {
  return (
    <CardContainer>
      <CardHeader datetime={date} />
      <Wrapper>
        <ForecastStatistics forecast={day} title="day" />
        <Separator />
        <ForecastStatistics forecast={night} title="night" />
      </Wrapper>
    </CardContainer>
  );
}

export default ForecastForDayCard;
