import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Layout from 'components/Layout';
import Header from 'components/Layout/Header';
import Content from 'components/Layout/Content';
import ThemeChanger from './ThemeChanger';
import LanguageChanger from './LanguageChanger/LanguageChanger';
import LocalStorage from 'utils/localStorage';
import Themes, { DARK } from 'constants/themes';
import { useTranslation } from 'react-i18next';

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
  const [theme, setTheme] = useState(DARK);
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
      <ThemeProvider theme={Themes[theme]}>
        <Layout>
          <LanguageChanger currentLanguage={i18n.language} />
          <ThemeChanger defaultTheme={theme} onChangeTheme={setTheme} />
          <Header />
          <Content />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default WeatherApp;
