import React, { useContext } from "react";
import LazyLoad from "react-lazyload";

import { formatImageSource } from "utils";
import useFetchForecast from "hooks/useFetchForecast";
import { HOURLY_FORECAST_ENDPOINT } from "constants/endpoints";
import { transformResponseData } from "./utils";
import ContentContext from "components/Contexts/ContentContext";
import Loader from "components/Loader";
import { FILTERS } from "constants/filters";

import {
  Table,
  TableHead,
  TableRow,
  TableData,
  Box,
  WeatherDescription,
  Temperature,
  WeatherIcon,
  InnerBox
} from "./HourlyForecast.components";

export const TableHeader = () => (
  <thead>
    <tr>
      <TableHead>Time</TableHead>
      <TableHead>Temperature</TableHead>
      <TableHead>Precipations</TableHead>
    </tr>
  </thead>
);

export const TableBody = ({ data }) => {
  return (
    <tbody>
      {(data || []).map(({ date, precipitationProbability, ...other }) => (
        <TableRow key={date}>
          <TableData>{date}</TableData>
          <TableData>
            <TemperatureCell {...other} />
          </TableData>
          <TableData>{precipitationProbability}%</TableData>
        </TableRow>
      ))}
    </tbody>
  );
};

export const TemperatureCell = ({ icon, temperature, description }) => (
  <Box>
    <InnerBox>
      <LazyLoad height={45} once>
        <WeatherIcon src={formatImageSource(icon)} />
      </LazyLoad>
      <Temperature>{temperature}&deg;</Temperature>
    </InnerBox>
    <WeatherDescription>{description}</WeatherDescription>
  </Box>
);

const HourlyForecast = () => {
  const cityId = useContext(ContentContext);

  const { data, loading, error } = useFetchForecast({
    url: HOURLY_FORECAST_ENDPOINT,
    options: {
      cityId,
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
