import React from 'react';
import PropTypes from 'prop-types';

import DetailedForecast from './DetailedForecast';
import ShortForecast from './ShortForecast';
import { Wrapper } from './CurrentForecast.components';

function CurrentForecast({ data }) {
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

CurrentForecast.propTypes = {
  data: PropTypes.shape({
    ...ShortForecast.propTypes,
    ...DetailedForecast.propTypes,
  }),
};

CurrentForecast.defaultProps = {
  data: {},
};

export default CurrentForecast;
