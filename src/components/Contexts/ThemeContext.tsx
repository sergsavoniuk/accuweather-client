import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { ThemeProvider as StyledCompoThemeProvider } from 'styled-components';

import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import Themes, { DARK } from '@/constants/themes';
import { LocalStorageFields as Fields } from '@/constants/localStorageFields';

interface IThemeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeContext = createContext<IThemeContext | null>(null);

function ThemeProvider({ children }: { children?: React.ReactElement }) {
  const [theme, setTheme] = useState(LocalStorage.get(Fields.theme) || DARK);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(
    function updateTheme() {
      LocalStorage.set(Fields.theme, theme);
    },
    [theme],
  );

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
  const toogle = useCallback(theme => setTheme(theme), [setTheme]);

  return {
    theme,
    toogle,
  };
}

export { ThemeProvider, useTheme };
