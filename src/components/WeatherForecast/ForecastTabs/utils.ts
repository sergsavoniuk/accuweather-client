import { FORECAST_TABS as Tabs } from '@/constants/forecastTabs';
// import { ForecastState } from '@/hooks/useFetchForecast';

interface CurrentForecast {
  Temperature: {
    Value: number;
  };
  WeatherIcon: string;
  IconPhrase: string;
  RealFeelTemperature: {
    Value: number;
  };
  RelativeHumidity: number;
  Wind: {
    Speed: {
      Value: number;
    };
    Direction: {
      Localized: string;
    };
  };
  Visibility: {
    Value: number;
  };
}

export interface TransformedCurrentForecast {
  temperature: number;
  icon: string;
  description: string;
  realFeelTemperature: number;
  humidity: number;
  wind: {
    speed: number;
    direction: string;
  };
  visibility: number;
}

interface HourlyForecast {
  Temperature: {
    Value: number;
  };
  WeatherIcon: string;
  IconPhrase: string;
  DateTime: string;
  PrecipitationProbability: string;
}

export interface TransformedHourlyForecast {
  temperature: number;
  icon: string;
  description: string;
  date: string;
  precipitationProbability: number;
}

interface For5DaysForecast {
  DailyForecasts: Array<{
    Date: string;
    Temperature: {
      Maximum: {
        Value: number;
      };
      Minimum: {
        Value: number;
      };
    };
    RealFeelTemperature: {
      Maximum: {
        Value: number;
      };
      Minimum: {
        Value: number;
      };
    };
    Day: {
      IconPhrase: string;
      Icon: string;
    };
    Night: {
      IconPhrase: string;
      Icon: string;
    };
  }>;
}

export interface DayNightForecast {
  temperature: number;
  realFeelTemperature: number;
  description: string;
  icon: string;
}

export interface TransformedFor5DaysForecast {
  date: string | number;
  day: DayNightForecast;
  night: DayNightForecast;
}

export type Forecast =
  | TransformedCurrentForecast
  | TransformedHourlyForecast[]
  | TransformedFor5DaysForecast[]
  | null;

export const transformResponseData = {
  [Tabs.Current](data: CurrentForecast[]): TransformedCurrentForecast {
    return data.reduce(
      (forecast, item) => {
        forecast.temperature = Math.round(item.Temperature.Value);
        forecast.icon = item.WeatherIcon;
        forecast.description = item.IconPhrase;
        forecast.realFeelTemperature = Math.round(
          item.RealFeelTemperature.Value,
        );
        forecast.humidity = item.RelativeHumidity;
        forecast.wind = {
          speed: item.Wind.Speed.Value,
          direction: item.Wind.Direction.Localized,
        };
        forecast.visibility = item.Visibility.Value;
        return forecast;
      },
      {} as TransformedCurrentForecast,
    );
  },

  [Tabs.Hourly](data: HourlyForecast[]) {
    return data.map(item => ({
      temperature: Math.round(item.Temperature.Value),
      icon: item.WeatherIcon,
      description: item.IconPhrase,
      date: item.DateTime,
      precipitationProbability: item.PrecipitationProbability,
    }));
  },

  [Tabs.For5Days](data: For5DaysForecast) {
    return data.DailyForecasts.map(item => ({
      date: new Date(item.Date),
      day: {
        temperature: item.Temperature.Maximum.Value,
        realFeelTemperature: item.RealFeelTemperature.Maximum.Value,
        description: item.Day.IconPhrase,
        icon: item.Day.Icon,
      },
      night: {
        temperature: item.Temperature.Minimum.Value,
        realFeelTemperature: item.RealFeelTemperature.Minimum.Value,
        description: item.Night.IconPhrase,
        icon: item.Night.Icon,
      },
    }));
  },
};

export function clearResponse(response: any) {
  Object.keys(response).forEach(key => (response[key] = undefined));
}
