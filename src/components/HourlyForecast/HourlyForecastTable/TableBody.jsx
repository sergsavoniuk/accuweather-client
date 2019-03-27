import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import TemperatureCell from './TemperatureCell';
import LocalStorage from 'utils/localStorage';
import { getDateLocale, getTimePattern } from 'utils';

function TableBody({ data }) {
  const language = LocalStorage.get('language');
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

const { arrayOf, shape, string, number } = PropTypes;

TableBody.propTypes = {
  data: arrayOf(
    shape({
      date: string.isRequired,
      precipitationProbability: number.isRequired,
      ...TemperatureCell.propTypes
    }).isRequired
  )
};

export default TableBody;
