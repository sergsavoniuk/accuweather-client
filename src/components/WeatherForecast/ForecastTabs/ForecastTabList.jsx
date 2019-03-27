import React from "react";
import { useTranslation } from "react-i18next";

import { FORECAST_TABS as Tabs } from "constants/forecastTabs";
import { Wrapper, ForecastTabListItem } from "./ForecastTabs.components";

export default function ForecastTabList({ activeTab, onSelectTab }) {
  const [t] = useTranslation();
  return (
    <Wrapper>
      {Object.keys(Tabs).map(tabKey => (
        <ForecastTabListItem
          key={tabKey}
          active={Tabs[tabKey] === activeTab}
          name={Tabs[tabKey]}
          onClick={event => onSelectTab(event.target.name)}
        >
          {t(`ForecastTab.${tabKey}.label`)}
        </ForecastTabListItem>
      ))}
    </Wrapper>
  );
}
