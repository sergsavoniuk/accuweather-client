import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

import { Wrapper, UncheckedIcon, CheckedIcon } from './ThemeChanger.components';
import { LIGHT, DARK } from 'constants/themes';

const BLACK_COLOR = '#000';

function ThemeChanger({ defaultTheme, onChangeTheme }) {
  function handleChange(checked) {
    onChangeTheme(checked ? DARK : LIGHT);
  }

  return (
    <Wrapper>
      <Switch
        checked={defaultTheme === DARK}
        onChange={handleChange}
        offColor={BLACK_COLOR}
        onColor={BLACK_COLOR}
        uncheckedIcon={<UncheckedIcon />}
        checkedIcon={<CheckedIcon />}
      />
    </Wrapper>
  );
}

const { string, func } = PropTypes;

ThemeChanger.propTypes = {
  defaultTheme: string.isRequired,
  onChangeTheme: func.isRequired,
};

export default ThemeChanger;
