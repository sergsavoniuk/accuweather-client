import React, { useState, memo, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import NetworkNotificationContext from 'components/Contexts/NetworkNotificationContext';
import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import SearchCityAutocomplete from './AutocompleteSearch';
import LocalStorage from 'utils/localStorage';
import { Form, Button } from './SearchCity.components';
import { LocalStorageFields as Fields } from 'constants/localStorageFields';

const initialState = {
  key: null,
  value: '',
};

function SearchCityForm({ onSubmit }) {
  const [city, setCity] = useState(initialState);
  const [t] = useTranslation();

  const setShowOfflineNotification = useContext(NetworkNotificationContext);
  const isOnline = useContext(NetworkStatusContext);

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
      setShowOfflineNotification(true);
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
