import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import NetworkNotificationContext from 'components/Contexts/NetworkNotificationContext';
import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import LocalStorage from 'utils/localStorage';
import { FORECAST_TABS as Tabs } from 'constants/forecastTabs';
import { Wrapper, ForecastTabListItem } from './ForecastTabs.components';

export default function ForecastTabList({ activeTab, onSelectTab }) {
  const [t] = useTranslation();

  const setShowOfflineNotification = useContext(NetworkNotificationContext);
  const isOnline = useContext(NetworkStatusContext);

  function handleSelectTab(event) {
    const tabName = event.target.name;

    if (isOnline || LocalStorage.get(tabName) !== undefined) {
      onSelectTab(tabName);
    } else {
      setShowOfflineNotification(true);
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

const { string, func } = PropTypes;

ForecastTabList.propTypes = {
  activeTab: string.isRequired,
  onSelectTab: func.isRequired,
};
