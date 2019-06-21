import React from 'react';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';

import { formatImageSource } from '@/utils';
import {
  Wrapper,
  TimeOfDay,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  RealFeelTemperature,
} from './ForecastStatistics.components';
import { DayNightForecast as DayNightForecastProps } from '@/components/WeatherForecast/ForecastTabs/utils';

const BASE_PREFIX = 'ForecastForDay.Statistics';

interface Props {
  forecast: DayNightForecastProps;
  title: string;
}

function ForecastStatistics({
  forecast: { temperature, realFeelTemperature, description, icon },
  title,
}: Props) {
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

export default ForecastStatistics;
