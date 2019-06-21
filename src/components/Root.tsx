import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Layout, { Header, Content } from '@/components/Layout';
import Settings from '@/components/Settings';
import NetworkOfflineNotification from './Notifications/NetworkOfflineNotification';
import { NetworkStatusProvider } from './Contexts/NetworkStatusContext';
import { NetworkNotificationProvider } from './Contexts/NetworkNotificationContext';
import { ThemeProvider } from '@/components/Contexts/ThemeContext';

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
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Layout>
          <NetworkStatusProvider>
            <NetworkNotificationProvider>
              <NetworkOfflineNotification />
              <Settings />
              <Header />
              <Content />
            </NetworkNotificationProvider>
          </NetworkStatusProvider>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default WeatherApp;
