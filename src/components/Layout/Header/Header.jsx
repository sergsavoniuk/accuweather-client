import React, { useState } from "react";
import { format } from "date-fns";

import useInterval from "hooks/useInterval";
import {
  Container,
  Link,
  Logo,
  Title,
  DateTimeBox,
  Date as FormattedDate,
  Time as FormattedTime,
  Space
} from "./Header.components";

const DATE_FORMAT = "DD MMMM";
const TIME_FORMAT = "HH:mm A";

export const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000 * (60 - date.getSeconds()));

  return (
    <DateTimeBox>
      <FormattedDate>{format(date, DATE_FORMAT)}</FormattedDate>
      <Space>{",  "}</Space>
      <FormattedTime>{format(date, TIME_FORMAT)}</FormattedTime>
    </DateTimeBox>
  );
};

export const AppLogo = () => (
  <Link href="#">
    <Logo />
    <Title>AccuWeather Client</Title>
  </Link>
);

const Header = () => (
  <Container>
    <AppLogo />
    <DateTime />
  </Container>
);

export default Header;
