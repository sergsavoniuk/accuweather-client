import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import { Wrapper, Param, Label, Value } from './DetailedForecast.components';
import { useTranslation } from 'react-i18next';

const BASE_PREFIX = 'DetailedForecast.param';

function DetailedForecast({
  description,
  realFeelTemperature,
  humidity,
  wind,
  visibility
}) {
  const [t] = useTranslation();
  return (
    <Wrapper>
      <Param role='heading'>
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

const { string, number, shape } = PropTypes;

DetailedForecast.propTypes = {
  description: string.isRequired,
  realFeelTemperature: number.isRequired,
  humidity: number.isRequired,
  wind: shape({
    direction: string.isRequired,
    speed: number.isRequired
  }).isRequired,
  visibility: number.isRequired
};

export default DetailedForecast;
