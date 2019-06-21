import React from 'react';
import { format } from 'date-fns';

import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import { getDateLocale } from '@/utils';
import { StyledCardHeader } from './CardHeader.components';
import { LocalStorageFields as Fields } from '@/constants/localStorageFields';
import { TransformedFor5DaysForecast as ForecastFor5DaysProps } from '@/components/WeatherForecast/ForecastTabs/utils';

const DATE_PATTERN = 'dddd, D MMMM';

type CardHeaderProps = Pick<ForecastFor5DaysProps, 'date'>;

function CardHeader({ date }: CardHeaderProps) {
  const language = LocalStorage.get(Fields.language);

  const [weekday, currentDate] = format(date, DATE_PATTERN, {
    locale: getDateLocale(language),
  }).split(',');

  return (
    <StyledCardHeader>
      <span>{weekday},</span>
      <span>{currentDate}</span>
    </StyledCardHeader>
  );
}

export default CardHeader;
