import React from "react";

import { Box, Weekday, CurrentDate } from "./CardHeader.components";
import { getFormattedDate } from "utils";

const DATE_PATTERN = "dddd, D MMMM";

const CardHeader = ({ datetime }) => {
  const [weekday, date] = getFormattedDate(datetime, DATE_PATTERN);
  return (
    <Box>
      <Weekday>{weekday},</Weekday>
      <CurrentDate>{date}</CurrentDate>
    </Box>
  );
};

export default CardHeader;
