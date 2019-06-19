import React from 'react';
import 'styled-components/macro';

import { Wrapper, Param, Label, Value } from './DetailedForecast.components';
import { useTranslation } from 'react-i18next';

const BASE_PREFIX: string = 'DetailedForecast.param';

export interface Props {
  description: string;
  realFeelTemperature: number;
  humidity: number;
  wind: {
    direction: string;
    speed: number;
  };
  visibility: number;
}

function DetailedForecast({
  description,
  realFeelTemperature,
  humidity,
  wind,
  visibility,
}: Props) {
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
