import React, { useState, useEffect, lazy } from "react";

import ForecastFilters from "./ForecastFilters";
import Loader from "components/Loader";
import { Title } from "./WeatherForecast.components";
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
  const [filter, setFilter] = useState(FILTERS.Current);

  useEffect(() => {
    PAGES[FILTERS.Hourly].prefetch();
    PAGES[FILTERS.For5Days].prefetch();
  }, []);

  const Page = PAGES[filter];

  return (
    <>
      <Title>Weather forecast for {city}</Title>
      <ForecastFilters activeFilter={filter} onFilterChange={setFilter} />
      <React.Suspense fallback={<Loader />}>
        <Page />
      </React.Suspense>
    </>
  );
};

export default WeatherForecast;
