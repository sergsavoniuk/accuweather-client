import React, { Suspense, useRef, useState, lazy } from 'react';

import Loader from 'components/Loader';
import RefreshButton from './RefreshButton';
import { localStorageInstance as LocalStorage } from 'utils/localStorage';
import useFetchForecast from 'hooks/useFetchForecast';
import { FORECAST_TABS as Tabs } from 'constants/forecastTabs';
import { FORECAST_ENDPOINTS } from 'constants/endpoints';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { transformResponseData, clearResponse } from './utils';
import { useWeatherHook } from 'components/Contexts/WeatherContext';

const { Current, Hourly, For5Days } = Tabs;

const PAGES = {
  [Current]: lazy(() =>
    import(/* webpackChunkName: "CurrentForecast" */ 'components/CurrentForecast'),
  ),
  [Hourly]: lazy(() =>
    import(/* webpackChunkName: "HourlyForecast" */ 'components/HourlyForecast'),
  ),
  [For5Days]: lazy(() =>
    import(/* webpackChunkName: "ForecastFor5Days" */ 'components/ForecastFor5Days'),
  ),
};

interface Props {
  activeTab: string;
}

export default function ForecastTabPanels({ activeTab }: Props) {
  const prevActiveTab = useRef(activeTab);
  const [isFreshDataRequested, setFreshDataRequested] = useState(false);

  const { cityId } = useWeatherHook();

  const response = useFetchForecast({
    url: FORECAST_ENDPOINTS[activeTab],
    options: {
      cityId,
      language: LocalStorage.get(Fields.language),
      filter: activeTab,
      details: activeTab === Hourly ? false : true,
      isFreshDataRequested,
    },
    cb: transformResponseData[activeTab],
  });

  if (isFreshDataRequested) {
    setTimeout(() => setFreshDataRequested(false), 200);
  }

  if (prevActiveTab.current !== activeTab) {
    clearResponse(response);
    prevActiveTab.current = activeTab;
  }

  const { data, loading, error } = response;

  if (error) {
    throw error;
  }

  const Page = PAGES[activeTab];

  return (
    <>
      <RefreshButton
        disabled={loading === true}
        onRefreshData={setFreshDataRequested}
      />
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Page data={data} />
        </Suspense>
      )}
    </>
  );
}
