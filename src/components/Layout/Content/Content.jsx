import React, { useState, useEffect, memo } from 'react';

import SearchCity from 'components/SearchCity';
import WeatherForecast from 'components/WeatherForecast';
import ContentContext from 'components/Contexts/ContentContext';
import ContentErrorBoundary from 'components/ErrorBoundaries';
import LocalStorage from 'utils/localStorage';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { Wrapper } from './Content.components';

function Content() {
  const [cityId, setCityId] = useState(null);

  useEffect(() => {
    const cityId = LocalStorage.get(Fields.cityId);
    if (cityId) {
      setCityId(cityId);
    }
  }, [cityId]);

  return (
    <ContentErrorBoundary>
      <ContentContext.Provider value={cityId}>
        <Wrapper>
          <SearchCity onSubmit={setCityId} />
          {cityId && <WeatherForecast />}
        </Wrapper>
      </ContentContext.Provider>
    </ContentErrorBoundary>
  );
}

export default memo(Content);
