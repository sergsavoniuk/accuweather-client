import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { RefreshButton as StyledRefreshButton } from './ForecastTabs.components';
import { LIGHT, DARK } from 'constants/themes';

function RefreshButton({ disabled, onRefreshData: handleRefresh, theme }) {
  return (
    <StyledRefreshButton
      disabled={disabled}
      onClick={() => handleRefresh(true)}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/refresh_icon_${
          theme.themeName === LIGHT ? DARK : LIGHT
        }.png`}
        alt="Refresh icon"
      />
    </StyledRefreshButton>
  );
}

const { bool, func, object } = PropTypes;

RefreshButton.propTypes = {
  disabled: bool.isRequired,
  onRefreshData: func.isRequired,
  theme: object.isRequired,
};

export default memo(withTheme(RefreshButton));
