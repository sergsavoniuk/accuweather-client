import React, { useState } from "react";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

import useInterval from "hooks/useInterval";
import {
  Header as StyledHeader,
  Brand as StyledBrand,
  BrandLogo,
  BrandName,
  Wrapper
} from "./Header.components";
import enLocale from "date-fns/locale/en";
import ruLocale from "date-fns/locale/ru";

const DATE_FORMAT = "DD MMMM";
const TIME_FORMAT_EN = "hh:mm A";
const TIME_FORMAT_RU = "HH:mm";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [_, i18n] = useTranslation();

  const locale = i18n.language === "ru" ? ruLocale : enLocale;
  const timePatterm = i18n.language === "ru" ? TIME_FORMAT_RU : TIME_FORMAT_EN;

  useInterval(() => {
    setDate(new Date());
  }, 1000 * (60 - date.getSeconds()));

  return (
    <Wrapper>
      <span>{format(date, DATE_FORMAT, { locale })}</span>
      <span>{",  "}</span>
      <span>{format(date, timePatterm, { locale })}</span>
    </Wrapper>
  );
};

export const Brand = () => (
  <StyledBrand as="a" href="#">
    <BrandLogo />
    <BrandName>AccuWeather Client</BrandName>
  </StyledBrand>
);

const Header = () => (
  <StyledHeader>
    <Brand />
    <DateTime />
  </StyledHeader>
);

export default Header;
