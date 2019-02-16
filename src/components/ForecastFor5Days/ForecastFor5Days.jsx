import React, { useContext } from "react";

import Loader from "components/Loader";
import ForecastForDayCard from "./ForecastForDayCard";
import { Box } from "./ForecastFor5Days.components";
import ContentContext from "components/Contexts/ContentContext";
import useFetchForecast from "hooks/useFetchForecast";
import { transformResponseData } from "./utils";
import { FILTERS } from "constants/filters";
import { FOR5DAYS_FORECAST_ENDPOINT } from "constants/endpoints";

const ForecastFor5Days = () => {
  const cityId = useContext(ContentContext);

  const { data, loading, error } = useFetchForecast({
    url: FOR5DAYS_FORECAST_ENDPOINT,
    options: {
      cityId,
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
    <Box>
      {(data || []).map(forecast => (
        <ForecastForDayCard key={forecast.date} forecast={forecast} />
      ))}
    </Box>
  );
};

export default ForecastFor5Days;
