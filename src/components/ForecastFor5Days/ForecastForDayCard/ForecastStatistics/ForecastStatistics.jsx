import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';

import { formatImageSource } from 'utils';
import {
  Wrapper,
  TimeOfDay,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  RealFeelTemperature,
} from './ForecastStatistics.components';

const BASE_PREFIX = 'ForecastForDay.Statistics';

function ForecastStatistics({
  forecast: { temperature, realFeelTemperature, description, icon },
  title,
}) {
  const [t] = useTranslation();
  return (
    <Wrapper>
      <TimeOfDay>
        {t(`${BASE_PREFIX}.dayOfTime.${title}`).toUpperCase()}
      </TimeOfDay>
      <LazyLoad height={45} once>
        <WeatherIcon src={formatImageSource(icon)} />
      </LazyLoad>
      <Temperature>{temperature}&deg;</Temperature>
      <WeatherDescription>{description}</WeatherDescription>
      <RealFeelTemperature>
        <span>{t(`${BASE_PREFIX}.realFeel`)} </span>
        <span>{realFeelTemperature}&deg;</span>
      </RealFeelTemperature>
    </Wrapper>
  );
}

const { shape, string, number } = PropTypes;

ForecastStatistics.propTypes = {
  forecast: shape({
    temperature: number.isRequired,
    realFeelTemperature: number.isRequired,
    description: string.isRequired,
    icon: number.isRequired,
  }).isRequired,
  title: string.isRequired,
};

export default ForecastStatistics;
