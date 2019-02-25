export const transformResponseData = data =>
  data.map(item => ({
    temperature: Math.round(item.Temperature.Value),
    icon: item.WeatherIcon,
    description: item.IconPhrase,
    date: item.DateTime,
    precipitationProbability: item.PrecipitationProbability
  }));
