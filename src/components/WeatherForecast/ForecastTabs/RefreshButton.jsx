import React from "react";
import { withTheme } from "styled-components";

import { RefreshButton as StyledRefreshButton } from "./ForecastTabs.components";
import { LIGHT, DARK } from "constants/themes";

function RefreshButton({ onRefreshData: handleRefresh, theme }) {
  return (
    <StyledRefreshButton onClick={() => handleRefresh(true)}>
      <img
        src={`${process.env.PUBLIC_URL}/images/refresh_icon_${
          theme.themeName === LIGHT ? DARK : LIGHT
        }.png`}
        alt="Refresh icon"
      />
    </StyledRefreshButton>
  );
}

export default withTheme(RefreshButton);
