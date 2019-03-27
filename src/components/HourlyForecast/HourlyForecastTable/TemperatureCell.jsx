import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { formatImageSource } from 'utils';
import {
  WeatherDescription,
  Temperature,
  WeatherIcon,
  Wrapper,
  InnerWrapper
} from './HourlyForecastTable.components';

function TemperatureCell({ icon, temperature, description }) {
  return (
    <Wrapper>
      <InnerWrapper>
        <LazyLoad height={45} once>
          <WeatherIcon src={formatImageSource(icon)} />
        </LazyLoad>
        <Temperature>{temperature}&deg;</Temperature>
      </InnerWrapper>
      <WeatherDescription>{description}</WeatherDescription>
    </Wrapper>
  );
}

const { number, string } = PropTypes;

TemperatureCell.propTypes = {
  icon: number.isRequired,
  temperature: number.isRequired,
  description: string.isRequired
};

export default TemperatureCell;
