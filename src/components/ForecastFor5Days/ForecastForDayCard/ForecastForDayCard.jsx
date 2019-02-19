import React from "react";

import CardHeader from "./CardHeader";
import ForecastStatistics from "./ForecastStatistics";
import {
  CardContainer,
  Wrapper,
  Separator
} from "./ForecastForDayCard.components";

const ForecastForDayCard = ({ forecast: { date, day, night } }) => (
  <CardContainer>
    <CardHeader datetime={date} />
    <Wrapper>
      <ForecastStatistics forecast={day} title="day" />
      <Separator />
      <ForecastStatistics forecast={night} title="night" />
    </Wrapper>
  </CardContainer>
);

export default ForecastForDayCard;
