import React from 'react';
import { format } from 'date-fns';

import TemperatureCell, {
  Props as TemperatureCellProps,
} from './TemperatureCell';
import { localStorageInstance as LocalStorage } from 'utils/localStorage';
import { getDateLocale, getTimePattern } from 'utils';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

export interface Props {
  data: Array<
    { date: string; precipitationProbability: number } & TemperatureCellProps
  >;
}

function TableBody({ data }: Props) {
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
