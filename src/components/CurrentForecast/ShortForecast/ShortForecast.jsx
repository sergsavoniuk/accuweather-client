import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import { formatImageSource } from 'utils';
import {
  Wrapper,
  Separator,
  Temperature,
  WeatherIcon,
} from './ShortForecast.components';

function ShortForecast({ icon, temperature }) {
  return (
    <Wrapper>
      <LazyLoad height={45} once>
        <WeatherIcon src={formatImageSource(icon)} />
      </LazyLoad>
      <Separator />
      <Temperature>{temperature}&deg;</Temperature>
    </Wrapper>
  );
}

const { number } = PropTypes;

ShortForecast.propTypes = {
  icon: number.isRequired,
  temperature: number.isRequired,
};

export default ShortForecast;
