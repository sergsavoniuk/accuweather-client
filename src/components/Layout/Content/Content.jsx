import React, { useState, useEffect, memo } from 'react';

import SearchCity from 'components/SearchCity';
import WeatherForecast from 'components/WeatherForecast';
import ContentContext from 'components/Contexts/ContentContext';
import ContentErrorBoundary from 'components/ErrorBoundaries';
import { Wrapper } from './Content.components';
import LocalStorage from 'utils/localStorage';

function Content() {
  const [cityId, setCityId] = useState(null);

  useEffect(() => {
    const cityId = LocalStorage.get('cityId');
    if (cityId) {
      setCityId(cityId);
    }
  }, [cityId]);

  return (
    <ContentErrorBoundary>
      <ContentContext.Provider value={cityId}>
        <Wrapper>
          <SearchCity onSubmit={setCityId} />
          {cityId && <WeatherForecast city={LocalStorage.get('city')} />}
        </Wrapper>
      </ContentContext.Provider>
    </ContentErrorBoundary>
  );
}

export default memo(Content);
