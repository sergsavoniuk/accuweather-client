import React from "react";
import { useTranslation } from "react-i18next";

import { StyledCardHeader } from "./CardHeader.components";
import { getFormattedDate } from "utils";

import enLocale from "date-fns/locale/en";
import ruLocale from "date-fns/locale/ru";

const DATE_PATTERN = "dddd, D MMMM";

const CardHeader = ({ datetime }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, i18n] = useTranslation();
  const locale = i18n.language === "ru" ? ruLocale : enLocale;
  const [weekday, date] = getFormattedDate(datetime, DATE_PATTERN, locale);

  return (
    <StyledCardHeader>
      <span>{weekday},</span>
      <span>{date}</span>
    </StyledCardHeader>
  );
};

export default CardHeader;
