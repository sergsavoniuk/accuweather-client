const BASE_URL = "https://dataservice.accuweather.com";

const FORECAST_ENDPOINT = `/forecasts/v1`;

export const CURRENT_FORECAST_ENDPOINT = `${BASE_URL}${FORECAST_ENDPOINT}/hourly/1hour`;
export const HOURLY_FORECAST_ENDPOINT = `${BASE_URL}${FORECAST_ENDPOINT}/hourly/12hour`;
export const FOR5DAYS_FORECAST_ENDPOINT = `${BASE_URL}${FORECAST_ENDPOINT}/daily/5day`;

const LOCATION_ENDPOINT = `/locations/v1`;

export const CITIES_AUTOCOMPLETE_ENDPOINT = `${BASE_URL}${LOCATION_ENDPOINT}/cities/autocomplete`;
