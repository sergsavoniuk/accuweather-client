import React, { useState, memo } from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import useInterval from 'hooks/useInterval';
import {
  Header as StyledHeader,
  Brand as StyledBrand,
  BrandLogo,
  BrandName,
  Wrapper,
} from './Header.components';
import { getDateLocale, getTimePattern } from 'utils';

const DATE_PATTERN: string = 'DD MMMM';

export function DateTime() {
  const [date, setDate] = useState(new Date());

  const [, i18n] = useTranslation();
  const language = i18n.language;
  const locale = getDateLocale(language);

  useInterval(() => {
    setDate(new Date());
  }, 1000 * (60 - date.getSeconds()));

  return (
    <Wrapper>
      <span>{format(date, DATE_PATTERN, { locale })}</span>
      <span>{',  '}</span>
      <span>{format(date, getTimePattern(language), { locale })}</span>
    </Wrapper>
  );
}

export function Brand() {
  return (
    <StyledBrand as="a" href="#">
      <BrandLogo />
      <BrandName>AccuWeather Client</BrandName>
    </StyledBrand>
  );
}

function Header() {
  return (
    <StyledHeader>
      <Brand />
      <DateTime />
    </StyledHeader>
  );
}

export default memo(Header);
