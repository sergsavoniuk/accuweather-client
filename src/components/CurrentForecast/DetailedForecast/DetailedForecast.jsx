import React from "react";
import "styled-components/macro";

import { Wrapper, Param, Value } from "./DetailedForecast.components";
import { useTranslation } from "react-i18next";

const DetailedForecast = ({
  description,
  realFeelTemperature,
  humidity,
  wind,
  visibility
}) => {
  const [t] = useTranslation();
  return (
    <Wrapper>
      <Param css="margin: 20px 0 30px 0;">
        <Value>{description}</Value>
      </Param>
      <Param>
        {t("DetailedForecast.param.realFeel")}:{" "}
        <Value>{realFeelTemperature}&deg;</Value>
      </Param>
      <Param>
        {t("DetailedForecast.param.humidity")}: <Value>{humidity}%</Value>
      </Param>
      <Param>
        {t("DetailedForecast.param.wind")}:{" "}
        <Value>
          {wind.direction} {wind.speed} {t("DetailedForecast.param.wind.unit")}
        </Value>
      </Param>
      <Param>
        {t("DetailedForecast.param.visibility")}:{" "}
        <Value>
          {visibility} {t("DetailedForecast.param.visibility.unit")}
        </Value>
      </Param>
    </Wrapper>
  );
};

export default DetailedForecast;
