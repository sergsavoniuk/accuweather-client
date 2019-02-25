import React, { useContext } from "react";

import LocalStorage from "utils/localStorage";
import ContentContext from "components/Contexts/ContentContext";
import Loader from "components/Loader";
import useFetchForecast from "hooks/useFetchForecast";
import { TableHeader, TableBody } from "./HourlyForecastTable";
import { Table } from "./HourlyForecastTable/HourlyForecastTable.components";
import { HOURLY_FORECAST_ENDPOINT } from "constants/endpoints";
import { transformResponseData } from "./utils";
import { FILTERS } from "constants/filters";

const HourlyForecast = () => {
  const cityId = useContext(ContentContext);

  const { data, loading, error } = useFetchForecast({
    url: HOURLY_FORECAST_ENDPOINT,
    options: {
      cityId,
      language: LocalStorage.get("language"),
      filter: FILTERS.Hourly,
      details: false
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
    <Table>
      <TableHeader />
      <TableBody data={data} />
    </Table>
  );
};

export default HourlyForecast;
