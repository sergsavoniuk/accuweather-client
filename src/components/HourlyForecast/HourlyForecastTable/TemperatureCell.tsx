import React from 'react';
import LazyLoad from 'react-lazyload';

import { formatImageSource } from 'utils';
import {
  WeatherDescription,
  Temperature,
  WeatherIcon,
  Wrapper,
  InnerWrapper,
} from './HourlyForecastTable.components';

export interface Props {
  icon: number;
  temperature: number;
  description: string;
}

function TemperatureCell({ icon, temperature, description }: Props) {
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

export default TemperatureCell;
