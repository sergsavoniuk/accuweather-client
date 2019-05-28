import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SearchCityAutocomplete from './AutocompleteSearch';
import LocalStorage from 'utils/localStorage';
import { Form, Button } from './SearchCity.components';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';
import { useNetworkStatus } from 'components/Contexts/NetworkStatusContext';
import { useOfflineNotification } from 'components/Contexts/NetworkNotificationContext';

const initialState = {
  key: null,
  value: '',
};

function SearchCityForm({ onSubmit }) {
  const [city, setCity] = useState(initialState);
  const [t] = useTranslation();

  const { setShowNotification } = useOfflineNotification();
  const { isOnline } = useNetworkStatus();

  function handleSubmit(event) {
    event.preventDefault();

    if (isOnline) {
      setCity(initialState);

      // Remove weather forecast for previous city
      LocalStorage.remove([Fields.current, Fields.for5Days, Fields.hourly]);

      // Remove city localized name
      LocalStorage.remove(Fields.localizedCity);

      // Update local storage, set new city
      LocalStorage.set(Fields.cityId, city.key);
      LocalStorage.set(Fields.city, city.value);

      onSubmit(city.key);
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

SearchCityForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(SearchCityForm);
