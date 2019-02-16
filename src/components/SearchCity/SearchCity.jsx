import React, { useState } from "react";

import SearchCityAutocomplete from "./AutocompleteSearch";
import { Form, Button } from "./SearchCity.components";
import LocalStorage from "utils/localStorage";

const initialState = {
  key: null,
  value: ""
};

const SearchCityForm = ({ onSubmit }) => {
  const [city, setCity] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    setCity(initialState);
    LocalStorage.clear();
    LocalStorage.set("cityId", city.key);
    LocalStorage.set("city", city.value);
    onSubmit(city.key);
  };

  const handleInputChange = value => setCity(value);

  return (
    <Form onSubmit={handleSubmit}>
      <SearchCityAutocomplete city={city} onChange={handleInputChange} />
      <Button>Search</Button>
    </Form>
  );
};

export default SearchCityForm;
