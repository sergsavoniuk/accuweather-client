import { FORECAST_TABS as Tabs } from "constants/forecastTabs";

export const transformResponseData = {
  [Tabs.Current](data) {
    return data.reduce((forecast, item) => {
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
  },

  [Tabs.Hourly](data) {
    return data.map(item => ({
      temperature: Math.round(item.Temperature.Value),
      icon: item.WeatherIcon,
      description: item.IconPhrase,
      date: item.DateTime,
      precipitationProbability: item.PrecipitationProbability
    }));
  },

  [Tabs.For5Days](data) {
    return data.DailyForecasts.map(item => ({
      date: new Date(item.Date),
      day: {
        temperature: item.Temperature.Maximum.Value,
        realFeelTemperature: item.RealFeelTemperature.Maximum.Value,
        description: item.Day.IconPhrase,
        icon: item.Day.Icon
      },
      night: {
        temperature: item.Temperature.Minimum.Value,
        realFeelTemperature: item.RealFeelTemperature.Minimum.Value,
        description: item.Night.IconPhrase,
        icon: item.Night.Icon
      }
    }));
  }
};
