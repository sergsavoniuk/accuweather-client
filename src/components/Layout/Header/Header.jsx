import React, { useState } from "react";
import { format } from "date-fns";

import useInterval from "hooks/useInterval";
import {
  Header as StyledHeader,
  Brand as StyledBrand,
  BrandLogo,
  BrandName,
  Wrapper
} from "./Header.components";
import { getDateLocale, getTimePattern } from "utils";
import LocalStorage from "utils/localStorage";

const DATE_PATTERN = "DD MMMM";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  const language = LocalStorage.get("language");
  const locale = getDateLocale(language);

  useInterval(() => {
    setDate(new Date());
  }, 1000 * (60 - date.getSeconds()));

  return (
    <Wrapper>
      <span>{format(date, DATE_PATTERN, { locale })}</span>
      <span>{",  "}</span>
      <span>{format(date, getTimePattern(language), { locale })}</span>
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
