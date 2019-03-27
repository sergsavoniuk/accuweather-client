import React from "react";
import { useTranslation } from "react-i18next";

import ForecastTabs from "./ForecastTabs";
import { Heading } from "./WeatherForecast.components";

const WeatherForecast = ({ city }) => {
  const [t] = useTranslation();

  return (
    <>
      <Heading>
        {t("WeatherForecast.heading")} {city}
      </Heading>
      <ForecastTabs />
    </>
  );
};

export default WeatherForecast;
