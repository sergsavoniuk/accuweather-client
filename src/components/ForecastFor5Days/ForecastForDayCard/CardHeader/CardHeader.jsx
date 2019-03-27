import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import LocalStorage from 'utils/localStorage';
import { getDateLocale } from 'utils';
import { StyledCardHeader } from './CardHeader.components';

const DATE_PATTERN = 'dddd, D MMMM';

function CardHeader({ datetime }) {
  const language = LocalStorage.get('language');

  const [weekday, date] = format(datetime, DATE_PATTERN, {
    locale: getDateLocale(language)
  }).split(',');

  return (
    <StyledCardHeader>
      <span>{weekday},</span>
      <span>{date}</span>
    </StyledCardHeader>
  );
}

CardHeader.propTypes = {
  datetime: PropTypes.string.isRequired
};

export default CardHeader;
