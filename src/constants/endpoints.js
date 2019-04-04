import { FORECAST_TABS as Tabs } from './forecastTabs';

const BASE_URL = 'https://dataservice.accuweather.com';

const FORECAST_BASE_ENDPOINT = `/forecasts/v1`;

export const FORECAST_ENDPOINTS = {
  [Tabs.Current]: `${BASE_URL}${FORECAST_BASE_ENDPOINT}/hourly/1hour`,
  [Tabs.Hourly]: `${BASE_URL}${FORECAST_BASE_ENDPOINT}/hourly/12hour`,
  [Tabs.For5Days]: `${BASE_URL}${FORECAST_BASE_ENDPOINT}/daily/5day`,
};

const LOCATION_BASE_ENDPOINT = `/locations/v1`;

export const SEARCH_BY_LOCATION_KEY_ENDPOINT = `${BASE_URL}${LOCATION_BASE_ENDPOINT}`;
export const CITIES_AUTOCOMPLETE_ENDPOINT = `${BASE_URL}${LOCATION_BASE_ENDPOINT}/cities/autocomplete`;
