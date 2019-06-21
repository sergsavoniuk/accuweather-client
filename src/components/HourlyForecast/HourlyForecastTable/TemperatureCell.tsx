import React from 'react';
import LazyLoad from 'react-lazyload';

import { formatImageSource } from '@/utils';
import {
  WeatherDescription,
  Temperature,
  WeatherIcon,
  Wrapper,
  InnerWrapper,
} from './HourlyForecastTable.components';
import { TransformedHourlyForecast as HourlyForecastProps } from '@/components/WeatherForecast/ForecastTabs/utils';

type Props = Pick<HourlyForecastProps, 'icon' | 'temperature' | 'description'>;

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
