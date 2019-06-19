import React from 'react';

import ForecastForDayCard, {
  ForecastForDayCardProps,
} from './ForecastForDayCard';
import { Wrapper } from './ForecastFor5Days.components';

interface Props {
  data: ForecastForDayCardProps[];
}

function ForecastFor5Days({ data }: Props) {
  return (
    <Wrapper>
      {data.map((forecast: ForecastForDayCardProps) => (
        <ForecastForDayCard key={forecast.date} forecast={forecast} />
      ))}
    </Wrapper>
  );
}

export default ForecastFor5Days;
