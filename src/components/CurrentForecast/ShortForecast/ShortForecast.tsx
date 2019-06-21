import React from 'react';
import LazyLoad from 'react-lazyload';

import { formatImageSource } from '@/utils';
import {
  Wrapper,
  Separator,
  Temperature,
  WeatherIcon,
} from './ShortForecast.components';
import { TransformedCurrentForecast as CurrentForecastProps } from '@/components/WeatherForecast/ForecastTabs/utils';

type ShortForecastProps = Pick<CurrentForecastProps, 'icon' | 'temperature'>;

function ShortForecast({ icon, temperature }: ShortForecastProps) {
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
