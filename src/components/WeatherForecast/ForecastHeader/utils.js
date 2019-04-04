import { SEARCH_BY_LOCATION_KEY_ENDPOINT } from 'constants/endpoints';

export function formatUrl({ cityId, language }) {
  return `${SEARCH_BY_LOCATION_KEY_ENDPOINT}/${cityId}?apikey=${
    process.env.REACT_APP_ACCUWEATHER_KEY
  }&language=${language}`;
}
