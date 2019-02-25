import React from "react";
import { format } from "date-fns";

import LocalStorage from "utils/localStorage";
import { getDateLocale } from "utils";
import { StyledCardHeader } from "./CardHeader.components";

const DATE_PATTERN = "dddd, D MMMM";

const CardHeader = ({ datetime }) => {
  const language = LocalStorage.get("language");

  const [weekday, date] = format(datetime, DATE_PATTERN, {
    locale: getDateLocale(language)
  }).split(",");

  return (
    <StyledCardHeader>
      <span>{weekday},</span>
      <span>{date}</span>
    </StyledCardHeader>
  );
};

export default CardHeader;
