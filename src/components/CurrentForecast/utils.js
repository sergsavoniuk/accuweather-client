export const transformResponseData = data =>
  data.reduce((forecast, item) => {
    forecast.temperature = Math.round(item.Temperature.Value);
    forecast.icon = item.WeatherIcon;
    forecast.description = item.IconPhrase;
    forecast.realFeelTemperature = Math.round(item.RealFeelTemperature.Value);
    forecast.humidity = item.RelativeHumidity;
    forecast.wind = {
      speed: item.Wind.Speed.Value,
      direction: item.Wind.Direction.Localized
    };
    forecast.visibility = item.Visibility.Value;
    return forecast;
  }, {});
