import { SEARCH_BY_LOCATION_KEY_ENDPOINT } from 'constants/endpoints';

interface Props {
  cityId: string | null;
  language: string;
}

export function formatUrl({ cityId, language }: Props) {
  return `${SEARCH_BY_LOCATION_KEY_ENDPOINT}/${cityId}?apikey=${
    process.env.REACT_APP_ACCUWEATHER_KEY
  }&language=${language}`;
}
