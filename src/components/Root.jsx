import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import NetworkStatusContext from './Contexts/NetworkStatusContext';
import NetworkNotificationContext from './Contexts/NetworkNotificationContext';

import Layout from 'components/Layout';
import Header from 'components/Layout/Header';
import Content from 'components/Layout/Content';
import Settings from 'components/Settings';
import LocalStorage from 'utils/localStorage';
import Themes, { DARK } from 'constants/themes';
import useNetworkStatus from 'hooks/useNetworkStatus';
import useOfflineNotification from 'hooks/useOfflineNotification';
import { useTranslation } from 'react-i18next';
import NetworkOfflineNotification from './Notifications/NetworkOfflineNotification/NetworkOfflineNotification';

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
`;

function WeatherApp() {
  const theme = useState(DARK);

  const isOnline = useNetworkStatus();

  const [
    showOfflineNotification,
    setShowOfflineNotification,
  ] = useOfflineNotification();

  // eslint-disable-next-line no-unused-vars
  const [t, i18n] = useTranslation();

  useEffect(() => {
    let currentLanguage = LocalStorage.get('language');
    if (!currentLanguage) {
      LocalStorage.set('language', i18n.language);
      currentLanguage = i18n.language;
    }
    i18n.changeLanguage(currentLanguage);
  }, [i18n.language]);

  return (
    <>
      <GlobalStyles />
      {showOfflineNotification && <NetworkOfflineNotification />}
      <ThemeProvider theme={Themes[theme[0]]}>
        <Layout>
          <Settings
            currentLanguage={i18n.language}
            networkStatus={isOnline}
            theme={theme}
          />
          <Header />
          <NetworkStatusContext.Provider value={isOnline}>
            <NetworkNotificationContext.Provider
              value={setShowOfflineNotification}
            >
              <Content />
            </NetworkNotificationContext.Provider>
          </NetworkStatusContext.Provider>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default WeatherApp;
