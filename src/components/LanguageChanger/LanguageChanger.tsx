import React, { memo } from 'react';
import PropTypes from 'prop-types';
import i18n from '../../i18n';

import { localStorageInstance as LocalStorage } from 'utils/localStorage';
import {
  Wrapper,
  RussianLanguageButton,
  BritishLanguageButton,
} from './LanguageChanger.components';
import { EN, RU } from 'constants/languages';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { useNetworkStatus } from 'components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from 'components/Contexts/NetworkNotificationContext';

interface Props {
  currentLanguage: string;
}

function LanguageChanger({ currentLanguage }: Props) {
  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  function handleLanguageChange(event: React.MouseEvent) {
    const language: string = event.target.name;

    if (isOnline) {
      LocalStorage.set(Fields.language, language);
      LocalStorage.remove(Fields.localizedCity);
      LocalStorage.remove([Fields.current, Fields.for5Days, Fields.hourly]);
    } else {
      setShowNotification(true);
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
