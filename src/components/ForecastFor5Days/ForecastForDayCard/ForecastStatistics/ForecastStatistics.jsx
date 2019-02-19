import React from "react";
import LazyLoad from "react-lazyload";

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
}) => (
  <Wrapper>
    <TimeOfDay>{title.toUpperCase()}</TimeOfDay>
    <LazyLoad height={45} once>
      <WeatherIcon src={formatImageSource(icon)} />
    </LazyLoad>
    <Temperature>{temperature}&deg;</Temperature>
    <WeatherDescription>{description}</WeatherDescription>
    <RealFeelTemperature>
      <span>RealFeel </span>
      <span>{realFeelTemperature}&deg;</span>
    </RealFeelTemperature>
  </Wrapper>
);

export default ForecastStatistics;
