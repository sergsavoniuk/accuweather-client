import React, { useContext } from "react";
import LazyLoad from "react-lazyload";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

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
import enLocale from "date-fns/locale/en";
import ruLocale from "date-fns/locale/ru";
import LocalStorage from "utils/localStorage";

const TIME_FORMAT_EN = "hh:mm A";
const TIME_FORMAT_RU = "HH:mm";

export const TableHeader = () => {
  const [t] = useTranslation();
  return (
    <thead>
      <tr>
        <th>{t("HourlyForecast.column.time")}</th>
        <th>{t("HourlyForecast.column.temperature")}</th>
        <th>{t("HourlyForecast.column.precipation")}</th>
      </tr>
    </thead>
  );
};

export const TableBody = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, i18n] = useTranslation();
  return (
    <tbody>
      {(data || []).map(({ date, precipitationProbability, ...other }) => {
        const locale = i18n.language === "ru" ? ruLocale : enLocale;
        const pattern =
          i18n.language === "ru" ? TIME_FORMAT_RU : TIME_FORMAT_EN;

        const now = new Date();
        const [hours, minutes] = date[0].split(":");
        now.setHours(hours);
        now.setMinutes(minutes);
        return (
          <tr key={date[0]}>
            <td>
              {format(now, pattern, {
                locale
              })}
            </td>
            <td>
              <TemperatureCell {...other} />
            </td>
            <td>{precipitationProbability}%</td>
          </tr>
        );
      })}
    </tbody>
  );
};

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
