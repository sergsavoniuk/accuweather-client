import React, { useContext } from "react";

import Loader from "components/Loader";
import ForecastForDayCard from "./ForecastForDayCard";
import { Wrapper } from "./ForecastFor5Days.components";
import ContentContext from "components/Contexts/ContentContext";
import useFetchForecast from "hooks/useFetchForecast";
import { transformResponseData } from "./utils";
import { FORECAST_TABS as FILTERS } from "constants/forecastTabs";
import { FOR5DAYS_FORECAST_ENDPOINT } from "constants/endpoints";
import LocalStorage from "utils/localStorage";

const ForecastFor5Days = () => {
  const cityId = useContext(ContentContext);

  const { data, loading, error } = useFetchForecast({
    url: FOR5DAYS_FORECAST_ENDPOINT,
    options: {
      cityId,
      language: LocalStorage.get("language"),
      filter: FILTERS.For5Days
    },
    cb: transformResponseData
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    throw new Error(error);
  }

  return (
    <Wrapper>
      {(data || []).map(forecast => (
        <ForecastForDayCard key={forecast.date} forecast={forecast} />
      ))}
    </Wrapper>
  );
};

export default ForecastFor5Days;
