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

const DATE_FORMAT = "DD MMMM";
const TIME_FORMAT = "HH:mm A";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000 * (60 - date.getSeconds()));

  return (
    <Wrapper>
      <span>{format(date, DATE_FORMAT)}</span>
      <span>{",  "}</span>
      <span>{format(date, TIME_FORMAT)}</span>
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
