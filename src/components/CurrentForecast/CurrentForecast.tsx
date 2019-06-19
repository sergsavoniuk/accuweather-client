import React from 'react';

import DetailedForecast, { DetailedForecastProps } from './DetailedForecast';
import ShortForecast, { ShortForecastProps } from './ShortForecast';
import { Wrapper } from './CurrentForecast.components';

type ForecastData = DetailedForecastProps & ShortForecastProps;

interface Props {
  data: ForecastData;
}

function CurrentForecast({ data = {} as ForecastData }: Props) {
  const {
    icon,
    temperature,
    description,
    realFeelTemperature,
    humidity,
    wind,
    visibility,
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
