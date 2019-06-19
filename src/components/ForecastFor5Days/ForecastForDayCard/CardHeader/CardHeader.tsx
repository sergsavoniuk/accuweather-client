import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { localStorageInstance as LocalStorage } from 'utils/localStorage';
import { getDateLocale } from 'utils';
import { StyledCardHeader } from './CardHeader.components';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

const DATE_PATTERN: string = 'dddd, D MMMM';

interface Props {
  datetime: string;
}

function CardHeader({ datetime }: Props) {
  const language = LocalStorage.get(Fields.language);

  const [weekday, date] = format(datetime, DATE_PATTERN, {
    locale: getDateLocale(language),
  }).split(',');

  return (
    <StyledCardHeader>
      <span>{weekday},</span>
      <span>{date}</span>
    </StyledCardHeader>
  );
}

CardHeader.propTypes = {
  datetime: PropTypes.string.isRequired,
};

export default CardHeader;
