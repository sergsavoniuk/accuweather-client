import React from "react";
import { useTranslation } from "react-i18next";

import {
  Wrapper,
  FilterButton as StyledFilterButton
} from "./ForecastFilters.components";
import { FILTERS } from "constants/filters";

export const FilterButton = ({
  activeFilter,
  name,
  children,
  onFilterChange
}) => {
  const [t] = useTranslation();
  return (
    <StyledFilterButton
      active={activeFilter === name}
      name={name}
      onClick={event => onFilterChange(event.target.name)}
    >
      {t(`FilterButton.${children}.label`)}
    </StyledFilterButton>
  );
};

const ForecastFilters = ({ activeFilter, onFilterChange }) => (
  <Wrapper>
    {Object.keys(FILTERS).map(key => (
      <FilterButton
        key={key}
        activeFilter={activeFilter}
        name={FILTERS[key]}
        onFilterChange={onFilterChange}
      >
        {key}
      </FilterButton>
    ))}
  </Wrapper>
);

export default ForecastFilters;
