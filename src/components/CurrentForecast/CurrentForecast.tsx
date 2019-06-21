import React from 'react';

import DetailedForecast from './DetailedForecast';
import ShortForecast from './ShortForecast';
import { Wrapper } from './CurrentForecast.components';
import { TransformedCurrentForecast } from '@/components/WeatherForecast/ForecastTabs/utils';

interface Props {
  data: TransformedCurrentForecast;
}

function CurrentForecast({ data = {} as TransformedCurrentForecast }: Props) {
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
