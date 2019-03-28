import React from 'react';
import PropTypes from 'prop-types';

import ForecastForDayCard from './ForecastForDayCard';
import { Wrapper } from './ForecastFor5Days.components';

function ForecastFor5Days({ data }) {
  return (
    <Wrapper>
      {data.map(forecast => (
        <ForecastForDayCard key={forecast.date} forecast={forecast} />
      ))}
    </Wrapper>
  );
}

ForecastFor5Days.propTypes = {
  data: PropTypes.arrayOf(ForecastForDayCard.propTypes.forecast),
};

ForecastFor5Days.defaultProps = {
  data: [],
};

export default ForecastFor5Days;
