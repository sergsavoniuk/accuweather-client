import React, { memo } from 'react';
import PropTypes from 'prop-types';
import i18n from '../../i18n';

import LocalStorage from 'utils/localStorage';
import {
  Wrapper,
  RussianLanguageButton,
  BritishLanguageButton,
} from './LanguageChanger.components';
import { EN, RU } from 'constants/languages';
import { FORECAST_TABS as FILTERS } from 'constants/forecastTabs';

function LanguageChanger({ currentLanguage }) {
  function handleLanguageChange(event) {
    const language = event.target.name;
    LocalStorage.set('language', language);
    LocalStorage.remove(Object.values(FILTERS));
    i18n.changeLanguage(language);
  }

  return (
    <Wrapper>
      <RussianLanguageButton
        aria-label="button"
        active={currentLanguage === RU}
        name={RU}
        onClick={handleLanguageChange}
      />
      <BritishLanguageButton
        aria-label="button"
        active={currentLanguage === EN}
        name={EN}
        onClick={handleLanguageChange}
      />
    </Wrapper>
  );
}

LanguageChanger.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
};

export default memo(LanguageChanger);
