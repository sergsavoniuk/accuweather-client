import React from "react";
import LazyLoad from "react-lazyload";

import { formatImageSource } from "utils";
import {
  Box,
  Title,
  WeatherIcon,
  Temperature,
  WeatherDescription,
  RealFeelTemperature
} from "./ForecastStatistics.components";

const ForecastStatistics = ({
  forecast: { temperature, realFeelTemperature, description, icon },
  title
}) => (
  <Box>
    <Title>{title.toUpperCase()}</Title>
    <LazyLoad height={45} once>
      <WeatherIcon src={formatImageSource(icon)} />
    </LazyLoad>
    <Temperature>{temperature}&deg;</Temperature>
    <WeatherDescription>{description}</WeatherDescription>
    <RealFeelTemperature>
      <span>RealFeel </span>
      <span>{realFeelTemperature}&deg;</span>
    </RealFeelTemperature>
  </Box>
);

export default ForecastStatistics;
