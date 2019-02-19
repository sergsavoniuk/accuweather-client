import React from "react";

import { StyledCardHeader } from "./CardHeader.components";
import { getFormattedDate } from "utils";

const DATE_PATTERN = "dddd, D MMMM";

const CardHeader = ({ datetime }) => {
  const [weekday, date] = getFormattedDate(datetime, DATE_PATTERN);
  return (
    <StyledCardHeader>
      <span>{weekday},</span>
      <span>{date}</span>
    </StyledCardHeader>
  );
};

export default CardHeader;
