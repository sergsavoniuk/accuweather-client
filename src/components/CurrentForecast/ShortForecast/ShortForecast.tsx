import React from 'react';
import LazyLoad from 'react-lazyload';

import { formatImageSource } from 'utils';
import {
  Wrapper,
  Separator,
  Temperature,
  WeatherIcon,
} from './ShortForecast.components';

export interface Props {
  icon: number;
  temperature: number;
}

function ShortForecast({ icon, temperature }: Props) {
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

export default ShortForecast;
