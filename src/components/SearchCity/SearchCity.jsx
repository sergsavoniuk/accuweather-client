import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import SearchCityAutocomplete from './AutocompleteSearch';
import LocalStorage from 'utils/localStorage';
import { Form, Button } from './SearchCity.components';
import { FORECAST_TABS as FILTERS } from 'constants/forecastTabs';

const initialState = {
  key: null,
  value: '',
};

function SearchCityForm({ onSubmit }) {
  const [city, setCity] = useState(initialState);
  const [t] = useTranslation();

  function handleSubmit(event) {
    event.preventDefault();
    setCity(initialState);

    // Remove weather forecast for previous city
    LocalStorage.remove(Object.values(FILTERS));

    // Update local storage, set new city
    LocalStorage.set('cityId', city.key);
    LocalStorage.set('city', city.value);

    onSubmit(city.key);
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

export default SearchCityForm;
