import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';
import i18n from '../../i18n';

import NetworkNotificationContext from 'components/Contexts/NetworkNotificationContext';
import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import LocalStorage from 'utils/localStorage';
import {
  Wrapper,
  RussianLanguageButton,
  BritishLanguageButton,
} from './LanguageChanger.components';
import { EN, RU } from 'constants/languages';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

function LanguageChanger({ currentLanguage }) {
  const setShowOfflineNotification = useContext(NetworkNotificationContext);
  const isOnline = useContext(NetworkStatusContext);

  function handleLanguageChange(event) {
    const language = event.target.name;

    if (isOnline) {
      LocalStorage.set(Fields.language, language);
      LocalStorage.remove(Fields.localizedCity);
      LocalStorage.remove([Fields.current, Fields.for5Days, Fields.hourly]);
    } else {
      setShowOfflineNotification(true);
    }

    LocalStorage.set(Fields.offlineLanguage, language);

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
