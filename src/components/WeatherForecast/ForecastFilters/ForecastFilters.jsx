import React from "react";

import {
  Box,
  FilterButton as StyledFilterButton
} from "./ForecastFilters.components";
import { FILTERS } from "constants/filters";

export const FilterButton = ({
  activeFilter,
  name,
  children,
  onFilterChange
}) => (
  <StyledFilterButton
    active={activeFilter === name}
    name={name}
    onClick={event => onFilterChange(event.target.name)}
  >
    {children}
  </StyledFilterButton>
);

const ForecastFilters = ({ activeFilter, onFilterChange }) => (
  <Box>
    <FilterButton
      activeFilter={activeFilter}
      name={FILTERS.Current}
      onFilterChange={onFilterChange}
    >
      Current
    </FilterButton>
    <FilterButton
      activeFilter={activeFilter}
      name={FILTERS.Hourly}
      onFilterChange={onFilterChange}
    >
      Hourly
    </FilterButton>
    <FilterButton
      activeFilter={activeFilter}
      name={FILTERS.For5Days}
      onFilterChange={onFilterChange}
    >
      For 5 Days
    </FilterButton>
  </Box>
);

export default ForecastFilters;
