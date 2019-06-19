import React from 'react';

import SearchCity from 'components/SearchCity';
import WeatherForecast from 'components/WeatherForecast';
import ContentErrorBoundary from 'components/ErrorBoundaries';
import { Wrapper } from './Content.components';
import { WeatherProvider } from 'components/Contexts/WeatherContext';

function Content() {
  return (
    <ContentErrorBoundary>
      <WeatherProvider>
        <Wrapper>
          <SearchCity />
          <WeatherForecast />
        </Wrapper>
      </WeatherProvider>
    </ContentErrorBoundary>
  );
}

export default Content;
