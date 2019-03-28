import React, { Suspense, useRef, useState, useContext, lazy } from 'react';
import PropTypes from 'prop-types';

import ContentContext from 'components/Contexts/ContentContext';
import Loader from 'components/Loader';
import RefreshButton from './RefreshButton';
import LocalStorage from 'utils/localStorage';
import useFetchForecast from 'hooks/useFetchForecast';
import { FORECAST_TABS as Tabs } from 'constants/forecastTabs';
import { FORECAST_ENDPOINTS } from 'constants/endpoints';
import { transformResponseData } from './utils';

const PAGES = {
  [Tabs.Current]: lazy(() =>
    import(/* webpackChunkName: "CurrentForecast" */ 'components/CurrentForecast'),
  ),
  [Tabs.Hourly]: lazy(() =>
    import(/* webpackChunkName: "HourlyForecast" */ 'components/HourlyForecast'),
  ),
  [Tabs.For5Days]: lazy(() =>
    import(/* webpackChunkName: "ForecastFor5Days" */ 'components/ForecastFor5Days'),
  ),
};

export default function ForecastTabPanels({ activeTab }) {
  const prevActiveTab = useRef(activeTab);
  const [isFreshDataRequested, setFreshDataRequested] = useState(false);

  const cityId = useContext(ContentContext);

  let { data, loading, error } = useFetchForecast({
    url: FORECAST_ENDPOINTS[activeTab],
    options: {
      cityId,
      language: LocalStorage.get('language'),
      filter: activeTab,
      details: activeTab === Tabs.Hourly ? false : true,
      isFreshDataRequested,
    },
    cb: transformResponseData[activeTab],
  });

  if (isFreshDataRequested) {
    setTimeout(() => setFreshDataRequested(false), 200);
  }

  if (prevActiveTab.current !== activeTab) {
    data = undefined;
    loading = false;
    error = undefined;
    prevActiveTab.current = activeTab;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    throw new Error(error);
  }

  const Page = PAGES[activeTab];

  return (
    <Suspense fallback={<Loader />}>
      <RefreshButton onRefreshData={setFreshDataRequested} />
      <Page data={data} />
    </Suspense>
  );
}

ForecastTabPanels.propTypes = {
  activeTab: PropTypes.string.isRequired,
};
