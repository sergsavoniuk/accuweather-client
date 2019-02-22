import React from "react";
import LazyLoad from "react-lazyload";
import { useTranslation } from "react-i18next";

import { formatImageSource } from "utils";
import {
  Wrapper,
  TimeOfDay,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  RealFeelTemperature
} from "./ForecastStatistics.components";

const ForecastStatistics = ({
  forecast: { temperature, realFeelTemperature, description, icon },
  title
}) => {
  const [t] = useTranslation();
  return (
    <Wrapper>
      <TimeOfDay>
        {t(`ForecastForDay.Statistics.dayOfTime.${title}`).toUpperCase()}
      </TimeOfDay>
      <LazyLoad height={45} once>
        <WeatherIcon src={formatImageSource(icon)} />
      </LazyLoad>
      <Temperature>{temperature}&deg;</Temperature>
      <WeatherDescription>{description}</WeatherDescription>
      <RealFeelTemperature>
        <span>{t("ForecastForDay.Statistics.realFeel")} </span>
        <span>{realFeelTemperature}&deg;</span>
      </RealFeelTemperature>
    </Wrapper>
  );
};

export default ForecastStatistics;
