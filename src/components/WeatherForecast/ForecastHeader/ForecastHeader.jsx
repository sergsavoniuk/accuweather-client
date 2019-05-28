import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

import Loader from 'components/Loader';
import LocalStorage from 'utils/localStorage';
import { Heading } from './ForecastHeader.components';
import { formatUrl } from './utils';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { useWeatherHook } from 'components/Contexts/WeatherContext';

const initialState = {
  city: null,
  loading: false,
  error: null,
};

function reducer(oldState, newState) {
  return {
    ...oldState,
    ...newState,
  };
}

export default function ForecastHeader() {
  const [{ city, loading, error }, setState] = useReducer(
    reducer,
    initialState,
  );
  const { cityId } = useWeatherHook();
  const [t] = useTranslation();

  const language = LocalStorage.get(Fields.language);

  async function getLocalizedCityName() {
    try {
      setState({
        city: null,
        loading: true,
      });

      const {
        data: { LocalizedName },
      } = await axios.get(
        formatUrl({
          cityId,
          language,
        }),
      );

      LocalStorage.set(Fields.localizedCity, LocalizedName);

      setState({
        city: LocalizedName,
        loading: false,
      });
    } catch (error) {
      setState({
        error,
      });
    }
  }

  useEffect(() => {
    const localizedCity = LocalStorage.get(Fields.localizedCity);
    if (!localizedCity) {
      getLocalizedCityName();
    } else {
      setState({
        city: localizedCity,
      });
    }
  }, [language, cityId]);

  if (error) {
    throw error;
  }

  return (
    <Heading>
      {t('WeatherForecast.heading')}{' '}
      {loading && <Loader alignment="0 20px" size={30} />}
      {city}
    </Heading>
  );
}
