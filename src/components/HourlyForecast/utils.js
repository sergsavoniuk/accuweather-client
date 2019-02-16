import { getFormattedDate } from "utils";

const Pattern = "HH:mm";

export const transformResponseData = data =>
  data.map(item => ({
    temperature: Math.round(item.Temperature.Value),
    icon: item.WeatherIcon,
    description: item.IconPhrase,
    date: getFormattedDate(item.DateTime, Pattern),
    precipitationProbability: item.PrecipitationProbability
  }));
