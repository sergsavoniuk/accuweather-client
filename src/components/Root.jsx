import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Layout from "components/Layout";
import Header from "components/Layout/Header";
import Content from "components/Layout/Content";
import ThemeChanger from "./ThemeChanger";
import Themes, { DARK } from "constants/themes";

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

const WeatherApp = () => {
  const [theme, setTheme] = useState(DARK);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Themes[theme]}>
        <Layout>
          <ThemeChanger defaultTheme={theme} onChangeTheme={setTheme} />
          <Header />
          <Content />
        </Layout>
      </ThemeProvider>
    </>
  );
};
export default WeatherApp;
