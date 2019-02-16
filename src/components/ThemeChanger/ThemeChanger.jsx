import React from "react";
import Switch from "react-switch";

import { Box, UncheckedIcon, CheckedIcon } from "./ThemeChanger.components";
import { LIGHT, DARK } from "constants/themes";

const BLACK_COLOR = "#000";

const ThemeChanger = ({ defaultTheme, onChangeTheme }) => {
  const handleChange = checked => {
    onChangeTheme(checked ? DARK : LIGHT);
  };

  return (
    <Box>
      <Switch
        checked={defaultTheme === DARK}
        onChange={handleChange}
        offColor={BLACK_COLOR}
        onColor={BLACK_COLOR}
        uncheckedIcon={<UncheckedIcon />}
        checkedIcon={<CheckedIcon />}
      />
    </Box>
  );
};

export default ThemeChanger;
