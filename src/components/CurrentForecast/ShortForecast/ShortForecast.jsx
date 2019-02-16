import React from "react";
import LazyLoad from "react-lazyload";

import { formatImageSource } from "utils";
import {
  Box,
  Separator,
  Temperature,
  WeatherIcon
} from "./ShortForecast.components";

const ShortForecast = ({ icon, temperature }) => {
  return (
    <Box>
      <LazyLoad height={45} once>
        <WeatherIcon src={formatImageSource(icon)} />
      </LazyLoad>
      <Separator />
      <Temperature>{temperature}&deg;</Temperature>
    </Box>
  );
};

export default ShortForecast;
