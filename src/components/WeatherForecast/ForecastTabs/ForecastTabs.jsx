import React, { useState } from "react";

import ForecastTabList from "./ForecastTabList";
import ForecastTabPanels from "./ForecastTabPanels";
import { FORECAST_TABS as Tabs } from "constants/forecastTabs";

export default function ForecastTabs() {
  const [activeTab, setActiveTab] = useState(Tabs.Current);

  return (
    <>
      <ForecastTabList activeTab={activeTab} onSelectTab={setActiveTab} />
      <ForecastTabPanels activeTab={activeTab} />
    </>
  );
}
