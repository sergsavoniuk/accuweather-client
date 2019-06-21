import { CITIES_AUTOCOMPLETE_ENDPOINT } from '@/constants/endpoints';

interface CityResponse {
  data: Array<{
    Key: string;
    LocalizedName: string;
    Country: {
      LocalizedName: string;
    };
  }>;
}

interface CityTransformedData {
  [Key: string]: {
    city: string;
    country: string;
  };
}

export function transformResponseData(data: CityResponse): CityTransformedData {
  return data.data.reduce(
    (target, item) => {
      target[item.Key] = {
        city: item.LocalizedName,
        country: item.Country.LocalizedName,
      };
      return target;
    },
    {} as CityTransformedData,
  );
}

export function formatUrl({
  query,
  language,
}: {
  query: string;
  language: string;
}) {
  return `${CITIES_AUTOCOMPLETE_ENDPOINT}?apikey=${
    process.env.REACT_APP_ACCUWEATHER_KEY
  }&q=${query}&language=${language}`;
}
