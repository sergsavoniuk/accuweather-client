import React from 'react';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { Wrapper, Param, Label, Value } from './DetailedForecast.components';
import { TransformedCurrentForecast as CurrentForecastProps } from '@/components/WeatherForecast/ForecastTabs/utils';

const BASE_PREFIX: string = 'DetailedForecast.param';

type DetailedForecastProps = Pick<
  CurrentForecastProps,
  'description' | 'realFeelTemperature' | 'humidity' | 'wind' | 'visibility'
>;

function DetailedForecast({
  description,
  realFeelTemperature,
  humidity,
  wind,
  visibility,
}: DetailedForecastProps) {
  const [t] = useTranslation();
  return (
    <Wrapper>
      <Param role="heading">
        <Value>{description}</Value>
      </Param>
      <Param>
        <Label>{t(`${BASE_PREFIX}.realFeel`)}: </Label>
        <Value>{realFeelTemperature}&deg;</Value>
      </Param>
      <Param>
        <Label>{t(`${BASE_PREFIX}.humidity`)}: </Label>
        <Value>{humidity}%</Value>
      </Param>
      <Param>
        <Label>{t(`${BASE_PREFIX}.wind`)}: </Label>
        <Value>
          {wind.direction} {wind.speed} {t(`${BASE_PREFIX}.wind.unit`)}
        </Value>
      </Param>
      <Param>
        <Label>{t(`${BASE_PREFIX}.visibility`)}: </Label>
        <Value>
          {visibility} {t(`${BASE_PREFIX}.visibility.unit`)}
        </Value>
      </Param>
    </Wrapper>
  );
}

export default DetailedForecast;
