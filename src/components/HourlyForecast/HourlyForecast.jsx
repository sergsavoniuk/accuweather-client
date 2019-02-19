import React, { useContext } from "react";
import LazyLoad from "react-lazyload";

import ContentContext from "components/Contexts/ContentContext";
import Loader from "components/Loader";
import useFetchForecast from "hooks/useFetchForecast";
import { formatImageSource } from "utils";
import { HOURLY_FORECAST_ENDPOINT } from "constants/endpoints";
import { transformResponseData } from "./utils";
import {
  Table,
  WeatherDescription,
  Temperature,
  WeatherIcon,
  Wrapper,
  InnerWrapper
} from "./HourlyForecast.components";
import { FILTERS } from "constants/filters";

export const TableHeader = () => (
  <thead>
    <tr>
      <th>Time</th>
      <th>Temperature</th>
      <th>Precipations</th>
    </tr>
  </thead>
);

export const TableBody = ({ data }) => (
  <tbody>
    {(data || []).map(({ date, precipitationProbability, ...other }) => (
      <tr key={date}>
        <td>{date}</td>
        <td>
          <TemperatureCell {...other} />
        </td>
        <td>{precipitationProbability}%</td>
      </tr>
    ))}
  </tbody>
);

export const TemperatureCell = ({ icon, temperature, description }) => (
  <Wrapper>
    <InnerWrapper>
      <LazyLoad height={45} once>
        <WeatherIcon src={formatImageSource(icon)} />
      </LazyLoad>
      <Temperature>{temperature}&deg;</Temperature>
    </InnerWrapper>
    <WeatherDescription>{description}</WeatherDescription>
  </Wrapper>
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
