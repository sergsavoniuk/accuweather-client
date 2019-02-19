import React from "react";
import "styled-components/macro";

import { Wrapper, Param, Value } from "./DetailedForecast.components";

const DetailedForecast = ({
  description,
  realFeelTemperature,
  humidity,
  wind,
  visibility
}) => (
  <Wrapper>
    <Param css="margin: 20px 0 30px 0;">
      <Value>{description}</Value>
    </Param>
    <Param>
      Real Feel: <Value>{realFeelTemperature}&deg;</Value>
    </Param>
    <Param>
      Humidity: <Value>{humidity}%</Value>
    </Param>
    <Param>
      Wind:{" "}
      <Value>
        {wind.direction} {wind.speed} km/h
      </Value>
    </Param>
    <Param>
      Visibility: <Value>{visibility} km</Value>
    </Param>
  </Wrapper>
);

export default DetailedForecast;
