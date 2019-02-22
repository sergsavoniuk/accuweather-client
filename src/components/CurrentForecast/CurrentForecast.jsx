import React, { useContext } from "react";

import ContentContext from "components/Contexts/ContentContext";
import DetailedForecast from "./DetailedForecast";
import ShortForecast from "./ShortForecast";
import Loader from "components/Loader";
import { Wrapper } from "./CurrentForecast.components";
import useFetchForecast from "hooks/useFetchForecast";
import { CURRENT_FORECAST_ENDPOINT } from "constants/endpoints";
import { transformResponseData } from "./utils";
import { FILTERS } from "constants/filters";
import LocalStorage from "utils/localStorage";

const CurrentForecast = () => {
  const cityId = useContext(ContentContext);

  const { data, loading, error } = useFetchForecast({
    url: CURRENT_FORECAST_ENDPOINT,
    options: {
      cityId,
      language: LocalStorage.get("language"),
      filter: FILTERS.Current
    },
    cb: transformResponseData
  });

  const {
    icon,
    temperature,
    description,
    realFeelTemperature,
    humidity,
    wind,
    visibility
  } = data || {};

  if (loading) {
    return <Loader />;
  }

  if (error) {
    throw new Error(error);
  }

  return (
    Object.keys(data || {}).length > 0 && (
      <Wrapper>
        <ShortForecast icon={icon} temperature={temperature} />
        <DetailedForecast
          description={description}
          realFeelTemperature={realFeelTemperature}
          humidity={humidity}
          wind={wind}
          visibility={visibility}
        />
      </Wrapper>
    )
  );
};

export default CurrentForecast;
