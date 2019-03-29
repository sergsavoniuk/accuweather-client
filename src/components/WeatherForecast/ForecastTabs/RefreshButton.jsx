import React, { memo, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import NetworkNotificationContext from 'components/Contexts/NetworkNotificationContext';
import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import { withTheme } from 'styled-components';

import { RefreshButton as StyledRefreshButton } from './ForecastTabs.components';
import { LIGHT, DARK } from 'constants/themes';

function RefreshButton({ disabled, onRefreshData, theme }) {
  const setShowOfflineNotification = useContext(NetworkNotificationContext);
  const isOnline = useContext(NetworkStatusContext);

  const handleRefresh = useCallback(
    function handleRefresh() {
      if (isOnline) {
        onRefreshData(true);
      } else {
        setShowOfflineNotification(true);
      }
    },
    [isOnline],
  );

  return (
    <StyledRefreshButton disabled={disabled} onClick={handleRefresh}>
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
