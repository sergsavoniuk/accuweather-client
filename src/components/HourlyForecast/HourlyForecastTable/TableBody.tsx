import React from 'react';
import { format } from 'date-fns';

import TemperatureCell from './TemperatureCell';
import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import { getDateLocale, getTimePattern } from '@/utils';
import { LocalStorageFields as Fields } from '@/constants/localStorageFields';
import { HourlyForecastProps } from '../HourlyForecast';

function TableBody({ data }: HourlyForecastProps) {
  const language = LocalStorage.get(Fields.language);
  const locale = getDateLocale(language);
  const pattern = getTimePattern(language);

  return (
    <tbody>
      {data.map(({ date, precipitationProbability, ...other }) => (
        <tr key={date}>
          <td>{format(date, pattern, { locale })}</td>
          <td>
            <TemperatureCell {...other} />
          </td>
          <td>{precipitationProbability}%</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
