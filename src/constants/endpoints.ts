import { FORECAST_TABS as Tabs } from './forecastTabs';

const BASE_URL: string = 'https://dataservice.accuweather.com';

const FORECAST_BASE_ENDPOINT: string = `/forecasts/v1`;

export const FORECAST_ENDPOINTS: { [key: string]: string } = {
  [Tabs.Current]: `${BASE_URL}${FORECAST_BASE_ENDPOINT}/hourly/1hour`,
  [Tabs.Hourly]: `${BASE_URL}${FORECAST_BASE_ENDPOINT}/hourly/12hour`,
  [Tabs.For5Days]: `${BASE_URL}${FORECAST_BASE_ENDPOINT}/daily/5day`,
};

const LOCATION_BASE_ENDPOINT: string = `/locations/v1`;

export const SEARCH_BY_LOCATION_KEY_ENDPOINT: string = `${BASE_URL}${LOCATION_BASE_ENDPOINT}`;
export const CITIES_AUTOCOMPLETE_ENDPOINT: string = `${BASE_URL}${LOCATION_BASE_ENDPOINT}/cities/autocomplete`;
