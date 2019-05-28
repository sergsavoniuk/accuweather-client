import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageChanger from 'components/LanguageChanger';
import NetworkOfflineMessage from 'components/Notifications/NetworkOfflineMessage';
import ThemeChanger from 'components/ThemeChanger';
import LocalStorage from 'utils/localStorage';
import { Wrapper } from './Settings.components';
import { useNetworkStatus } from 'components/Contexts/NetworkStatusContext';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

function Settings({ currentLanguage }) {
  const { isOnline } = useNetworkStatus();

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation();

  useEffect(
    function setAppLanguage() {
      let currentLanguage;

      if (isOnline) {
        currentLanguage = LocalStorage.get(Fields.language);
      } else {
        currentLanguage = LocalStorage.get(Fields.offlineLanguage);
      }

      if (!currentLanguage) {
        LocalStorage.set(Fields.language, i18n.language);
        currentLanguage = i18n.language;
      }

      i18n.changeLanguage(currentLanguage);
    },
    [i18n.language],
  );

  return (
    <Wrapper>
      <LanguageChanger currentLanguage={i18n.language} />
      {!isOnline && <NetworkOfflineMessage />}
      <ThemeChanger />
    </Wrapper>
  );
}

export default Settings;
