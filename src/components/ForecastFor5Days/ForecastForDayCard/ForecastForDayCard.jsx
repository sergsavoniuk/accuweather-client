import React from "react";

import CardHeader from "./CardHeader";
import ForecastStatistics from "./ForecastStatistics";
import { CardContainer, Box, Separator } from "./ForecastForDayCard.components";

const ForecastForDayCard = ({ forecast: { date, day, night } }) => {
  return (
    <CardContainer>
      <CardHeader datetime={date} />
      <Box>
        <ForecastStatistics forecast={day} title="day" />
        <Separator />
        <ForecastStatistics forecast={night} title="night" />
      </Box>
    </CardContainer>
  );
};

export default ForecastForDayCard;
