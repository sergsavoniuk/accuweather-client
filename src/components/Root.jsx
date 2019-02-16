import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Layout from "components/Layout";
import Header from "components/Layout/Header";
import Content from "components/Layout/Content";
import ThemeChanger from "./ThemeChanger";
import Themes, { DARK } from "constants/themes";

const WeatherApp = () => {
  const [theme, setTheme] = useState(DARK);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <Layout>
        <ThemeChanger defaultTheme={theme} onChangeTheme={setTheme} />
        <Header />
        <Content />
      </Layout>
    </ThemeProvider>
  );
};
export default WeatherApp;
