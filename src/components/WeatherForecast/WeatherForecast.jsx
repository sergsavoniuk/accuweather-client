import React, { useState, useEffect, lazy } from "react";
import { useTranslation } from "react-i18next";

import ForecastFilters from "./ForecastFilters";
import Loader from "components/Loader";
import { Heading } from "./WeatherForecast.components";
import { FILTERS } from "constants/filters";
import { lazyWithPrefetch } from "./utils";

const PAGES = {
  [FILTERS.Current]: lazy(() =>
    import(/* webpackChunkName: "CurrentForecast" */ "../CurrentForecast")
  ),
  [FILTERS.Hourly]: lazyWithPrefetch(() =>
    import(/* webpackChunkName: "HourlyForecast" */ "../HourlyForecast")
  ),
  [FILTERS.For5Days]: lazyWithPrefetch(() =>
    import(/* webpackChunkName: "ForecastFor5Days" */ "../ForecastFor5Days")
  )
};

const WeatherForecast = ({ city }) => {
  const [t] = useTranslation();
  const [filter, setFilter] = useState(FILTERS.Current);

  useEffect(() => {
    PAGES[FILTERS.Hourly].prefetch();
    PAGES[FILTERS.For5Days].prefetch();
  }, []);

  const Page = PAGES[filter];

  return (
    <>
      <Heading>
        {t("WeatherForecast.heading")} {city}
      </Heading>
      <ForecastFilters activeFilter={filter} onFilterChange={setFilter} />
      <React.Suspense fallback={<Loader />}>
        <Page />
      </React.Suspense>
    </>
  );
};

export default WeatherForecast;
