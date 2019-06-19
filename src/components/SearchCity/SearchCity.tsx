import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SearchCityAutocomplete from './AutocompleteSearch';
import { localStorageInstance as LocalStorage } from 'utils/localStorage';
import { Form, Button } from './SearchCity.components';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { useNetworkStatus } from 'components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from 'components/Contexts/NetworkNotificationContext';
import { useWeatherHook } from 'components/Contexts/WeatherContext';

interface State {
  key: string | null;
  value: string;
}

const initialState: State = {
  key: null,
  value: '',
};

function SearchCityForm() {
  const [city, setCity] = useState(initialState);
  const [t] = useTranslation();

  const { updateCityId } = useWeatherHook();
  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();

    if (isOnline) {
      setCity(initialState);

      // Remove weather forecast for previous city
      LocalStorage.remove([Fields.current, Fields.for5Days, Fields.hourly]);

      // Remove city localized name
      LocalStorage.remove(Fields.localizedCity);

      // Update local storage, set new city
      LocalStorage.set(Fields.cityId, city.key!);
      LocalStorage.set(Fields.city, city.value);

      updateCityId(city.key);
    } else {
      setShowNotification(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <SearchCityAutocomplete city={city} onChange={setCity} />
      <Button>{t('SearchButton.label')}</Button>
    </Form>
  );
}

export default SearchCityForm;
