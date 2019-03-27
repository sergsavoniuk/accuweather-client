import React, { Suspense, useEffect, lazy } from "react";

import Loader from "components/Loader";
import { FORECAST_TABS as Tabs } from "constants/forecastTabs";
import { lazyWithPrefetch } from "./utils";

const PAGES = {
  [Tabs.Current]: lazy(() =>
    import(/* webpackChunkName: "CurrentForecast" */ "components/CurrentForecast")
  ),
  [Tabs.Hourly]: lazyWithPrefetch(() =>
    import(/* webpackChunkName: "HourlyForecast" */ "components/HourlyForecast")
  ),
  [Tabs.For5Days]: lazyWithPrefetch(() =>
    import(/* webpackChunkName: "ForecastFor5Days" */ "components/ForecastFor5Days")
  )
};

export default function ForecastTabPanels({ activeTab }) {
  useEffect(() => {
    PAGES[Tabs.Hourly].prefetch();
    PAGES[Tabs.For5Days].prefetch();
  }, []);

  const Page = PAGES[activeTab];

  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
