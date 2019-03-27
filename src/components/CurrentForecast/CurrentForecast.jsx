import React from "react";

import DetailedForecast from "./DetailedForecast";
import ShortForecast from "./ShortForecast";
import { Wrapper } from "./CurrentForecast.components";

function CurrentForecast({ data = {} }) {
  const {
    icon,
    temperature,
    description,
    realFeelTemperature,
    humidity,
    wind,
    visibility
  } = data;

  return (
    Object.keys(data).length > 0 && (
      <Wrapper>
        <ShortForecast icon={icon} temperature={temperature} />
        <DetailedForecast
          description={description}
          realFeelTemperature={realFeelTemperature}
          humidity={humidity}
          wind={wind}
          visibility={visibility}
        />
      </Wrapper>
    )
  );
}

export default CurrentForecast;
