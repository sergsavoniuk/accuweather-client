import { CITIES_AUTOCOMPLETE_ENDPOINT } from "constants/endpoints";

export const transformResponseData = data =>
  data.data.reduce((target, item) => {
    target[item.Key] = {
      city: item.LocalizedName,
      country: item.Country.LocalizedName
    };
    return target;
  }, {});

export const formatUrl = ({ query, language }) =>
  `${CITIES_AUTOCOMPLETE_ENDPOINT}?apikey=${
    process.env.REACT_APP_ACCUWEATHER_KEY
  }&q=${query}&language=${language}`;
