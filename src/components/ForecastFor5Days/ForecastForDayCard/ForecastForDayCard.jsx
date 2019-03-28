import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './CardHeader';
import ForecastStatistics from './ForecastStatistics';
import {
  CardContainer,
  Wrapper,
  Separator,
} from './ForecastForDayCard.components';

function ForecastForDayCard({ forecast: { date, day, night } }) {
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

const { shape, string } = PropTypes;

ForecastForDayCard.propTypes = {
  forecast: shape({
    date: string.isRequired,
    day: shape(ForecastStatistics.propTypes.forecast),
    night: shape(ForecastStatistics.propTypes.forecast),
  }),
};

export default ForecastForDayCard;
