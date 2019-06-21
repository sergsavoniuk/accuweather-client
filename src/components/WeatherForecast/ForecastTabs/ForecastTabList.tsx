import React from 'react';
import { useTranslation } from 'react-i18next';

import { localStorageInstance as LocalStorage } from '@/utils/localStorage';
import { FORECAST_TABS as Tabs } from '@/constants/forecastTabs';
import { Wrapper, ForecastTabListItem } from './ForecastTabs.components';
import { useNetworkStatus } from '@/components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from '@/components/Contexts/NetworkNotificationContext';

interface Props {
  activeTab: string;
  onSelectTab: (tabName: string) => void;
}

export default function ForecastTabList({ activeTab, onSelectTab }: Props) {
  const [t] = useTranslation();

  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  function handleSelectTab(event: React.MouseEvent) {
    const tabName = (event.target as HTMLButtonElement).name;

    if (isOnline || LocalStorage.get(tabName) !== undefined) {
      onSelectTab(tabName);
    } else {
      setShowNotification(true);
    }
  }

  return (
    <Wrapper>
      {Object.keys(Tabs).map(tabKey => (
        <ForecastTabListItem
          key={tabKey}
          active={Tabs[tabKey] === activeTab}
          name={Tabs[tabKey]}
          onClick={handleSelectTab}
        >
          {t(`ForecastTab.${tabKey}.label`)}
        </ForecastTabListItem>
      ))}
    </Wrapper>
  );
}
