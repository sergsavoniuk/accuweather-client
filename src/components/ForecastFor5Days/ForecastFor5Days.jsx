import React from "react";

import ForecastForDayCard from "./ForecastForDayCard";
import { Wrapper } from "./ForecastFor5Days.components";

function ForecastFor5Days({ data = [] }) {
  return (
    <Wrapper>
      {data.map(forecast => (
        <ForecastForDayCard key={forecast.date} forecast={forecast} />
      ))}
    </Wrapper>
  );
}

export default ForecastFor5Days;
