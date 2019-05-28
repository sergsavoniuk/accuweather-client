import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import { RefreshButton as StyledRefreshButton } from './ForecastTabs.components';
import { LIGHT, DARK } from 'constants/themes';
import { useTheme } from 'components/Contexts/ThemeContext';
import { useNetworkStatus } from 'components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from 'components/Contexts/NetworkNotificationContext';

function RefreshButton({ disabled, onRefreshData }) {
  const { theme } = useTheme();
  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  const handleRefresh = useCallback(
    function handleRefresh() {
      if (isOnline) {
        onRefreshData(true);
      } else {
        setShowNotification(true);
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
