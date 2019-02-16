import React from "react";

import { Box, Label, Value } from "./DetailedForecast.components";

const DetailedForecast = ({
  description,
  realFeelTemperature,
  humidity,
  wind,
  visibility
}) => (
  <Box>
    <Label margin="20px 0 30px 0">
      <Value>{description}</Value>
    </Label>
    <Label>
      Real Feel: <Value>{realFeelTemperature}&deg;</Value>
    </Label>
    <Label>
      Humidity: <Value>{humidity}%</Value>
    </Label>
    <Label>
      Wind:{" "}
      <Value>
        {wind.direction} {wind.speed} km/h
      </Value>
    </Label>
    <Label>
      Visibility: <Value>{visibility} km</Value>
    </Label>
  </Box>
);

export default DetailedForecast;
