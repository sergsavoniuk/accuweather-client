import React from 'react';
import { useTranslation } from 'react-i18next';

import Loader from 'components/Loader';
import useAutocomplete from 'hooks/useAutocomplete';
import {
  Wrapper,
  Input,
  DropdownList as List,
  DropdownListItem as ListItem,
} from './AutocompleteSearch.components';

interface DropdownListProps {
  items?: {
    [key: string]: {
      country: string;
      city: string;
    };
  };
  loading: boolean;
  onSelect: ({ key, value }: { key: string; value: string }) => void;
}

export function DropdownList({
  items = {},
  loading,
  onSelect,
}: DropdownListProps) {
  return (
    <List>
      {loading ? (
        <ListItem>
          <Loader alignment="0 auto" size={40} color="#848080" />
        </ListItem>
      ) : (
        Object.keys(items).map(key => (
          <ListItem
            key={key}
            onClick={() => {
              onSelect({ key, value: items[key].city });
            }}
          >
            {items[key].city}, {items[key].country}
          </ListItem>
        ))
      )}
    </List>
  );
}

interface AutocompleteSearchProps {
  city: {
    key: string;
    value: string;
  };
  onChange: (key: string) => void;
}

export default function AutocompleteSearch({
  city: { value },
  onChange,
}: AutocompleteSearchProps) {
  const [t] = useTranslation();

  const {
    data,
    loading,
    error,
    isOpen,
    handleChange,
    handleBlur,
    handleFocus,
  } = useAutocomplete(value, onChange);

  if (error) {
    throw error;
  }

  return (
    <Wrapper>
      <Input
        aria-label="search"
        value={value}
        placeholder={t('SearchInput.placeholder')}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isOpen && (loading || Object.keys(data).length > 0) ? (
        <DropdownList items={data} loading={loading} onSelect={onChange} />
      ) : null}
    </Wrapper>
  );
}
