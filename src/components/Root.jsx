import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useTranslation } from 'react-i18next';

import NetworkStatusContext from './Contexts/NetworkStatusContext';
import NetworkNotificationContext from './Contexts/NetworkNotificationContext';
import Layout from 'components/Layout';
import Header from 'components/Layout/Header';
import Content from 'components/Layout/Content';
import Settings from 'components/Settings';
import LocalStorage from 'utils/localStorage';
import useNetworkStatus from 'hooks/useNetworkStatus';
import useOfflineNotification from 'hooks/useOfflineNotification';
import NetworkOfflineNotification from './Notifications/NetworkOfflineNotification';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { ThemeProvider } from 'components/Contexts/ThemeContext';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    max-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: IBM Plex Mono, Space Grotesk, Roboto Slab, sans-serif;
    font-size: 16px;
  }

  #root {
    height: 100vh;
  }
`;

function WeatherApp() {
  const isOnline = useNetworkStatus();

  const [
    showOfflineNotification,
    setShowOfflineNotification,
  ] = useOfflineNotification();

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
    <>
      <GlobalStyles />
      {showOfflineNotification && <NetworkOfflineNotification />}
      <ThemeProvider>
        <Layout>
          <NetworkStatusContext.Provider value={isOnline}>
            <NetworkNotificationContext.Provider
              value={setShowOfflineNotification}
            >
              <Settings currentLanguage={i18n.language} />
              <Header />
              <Content />
            </NetworkNotificationContext.Provider>
          </NetworkStatusContext.Provider>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default WeatherApp;
