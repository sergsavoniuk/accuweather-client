import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ForecastTabs from './ForecastTabs';
import { Heading } from './WeatherForecast.components';

function WeatherForecast({ city }) {
  const [t] = useTranslation();

  return (
    <>
      <Heading>
        {t('WeatherForecast.heading')} {city}
      </Heading>
      <ForecastTabs />
    </>
  );
}

WeatherForecast.propTypes = {
  city: PropTypes.string.isRequired
};

export default WeatherForecast;
