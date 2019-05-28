import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { ThemeProvider as StyledCompoThemeProvider } from 'styled-components';

import LocalStorage from 'utils/localStorage';
import Themes, { DARK } from 'constants/themes';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(LocalStorage.get(Fields.theme) || DARK);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledCompoThemeProvider theme={Themes[theme]}>
        {children}
      </StyledCompoThemeProvider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;
  const toogle = useCallback(theme => setTheme(theme), [theme]);

  useEffect(
    function updateTheme() {
      LocalStorage.set(Fields.theme, theme);
    },
    [theme],
  );

  return {
    theme,
    toogle,
  };
}

export { ThemeProvider, useTheme };
