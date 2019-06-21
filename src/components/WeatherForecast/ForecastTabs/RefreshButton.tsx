import React, { memo, useCallback } from 'react';

import { RefreshButton as StyledRefreshButton } from './ForecastTabs.components';
import { LIGHT, DARK } from '@/constants/themes';
import { useTheme } from '@/components/Contexts/ThemeContext';
import { useNetworkStatus } from '@/components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from '@/components/Contexts/NetworkNotificationContext';

interface RefreshButton {
  disabled: boolean;
  onRefreshData: (flag: boolean) => void;
}

function RefreshButton({ disabled, onRefreshData }: RefreshButton) {
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

export default memo(RefreshButton);
