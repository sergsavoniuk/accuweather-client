export const transformResponseData = data =>
  data.DailyForecasts.map(item => ({
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
