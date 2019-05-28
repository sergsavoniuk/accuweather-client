import React, { memo, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import NetworkNotificationContext from 'components/Contexts/NetworkNotificationContext';
import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';

import { RefreshButton as StyledRefreshButton } from './ForecastTabs.components';
import { LIGHT, DARK } from 'constants/themes';
import { useTheme } from 'components/Contexts/ThemeContext';

function RefreshButton({ disabled, onRefreshData }) {
  const { theme } = useTheme();
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
          theme === LIGHT ? DARK : LIGHT
        }.png`}
        alt="Refresh icon"
      />
    </StyledRefreshButton>
  );
}

const { bool, func } = PropTypes;

RefreshButton.propTypes = {
  disabled: bool.isRequired,
  onRefreshData: func.isRequired,
};

export default memo(RefreshButton);
