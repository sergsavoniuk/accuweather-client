import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import SearchCityAutocomplete from "./AutocompleteSearch";
import { Form, Button } from "./SearchCity.components";
import LocalStorage from "utils/localStorage";
import { FILTERS } from "constants/filters";

const initialState = {
  key: null,
  value: ""
};

const SearchCityForm = ({ onSubmit }) => {
  const [city, setCity] = useState(initialState);
  const [t] = useTranslation();

  const handleSubmit = event => {
    event.preventDefault();
    setCity(initialState);

    // Remove weather forecast for previous city
    LocalStorage.remove(Object.values(FILTERS));

    // Update local storage, set new city
    LocalStorage.set("cityId", city.key);
    LocalStorage.set("city", city.value);

    onSubmit(city.key);
  };

  const handleInputChange = value => setCity(value);

  return (
    <Form onSubmit={handleSubmit}>
      <SearchCityAutocomplete city={city} onChange={handleInputChange} />
      <Button>{t("SearchButton.label")}</Button>
    </Form>
  );
};

export default SearchCityForm;
