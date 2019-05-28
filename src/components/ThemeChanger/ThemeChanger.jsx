import React from 'react';
import Switch from 'react-switch';

import { Wrapper, UncheckedIcon, CheckedIcon } from './ThemeChanger.components';
import { LIGHT, DARK } from 'constants/themes';
import { useTheme } from 'components/Contexts/ThemeContext';

const BLACK_COLOR = '#000';

function ThemeChanger() {
  const { theme, toogle } = useTheme();

  function handleChange(checked) {
    toogle(checked ? DARK : LIGHT);
  }

  return (
    <Wrapper>
      <Switch
        aria-label="Change theme"
        checked={theme === DARK}
        onChange={handleChange}
        offColor={BLACK_COLOR}
        onColor={BLACK_COLOR}
        uncheckedIcon={<UncheckedIcon />}
        checkedIcon={<CheckedIcon />}
      />
    </Wrapper>
  );
}

export default ThemeChanger;
