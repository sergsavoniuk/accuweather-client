import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Loader from 'components/Loader';
import useAutocomplete from 'hooks/useAutocomplete';
import {
  Wrapper,
  Input,
  DropdownList as List,
  DropdownListItem as ListItem
} from './AutocompleteSearch.components';

export function DropdownList({ items, loading, onSelect }) {
  return (
    <List>
      {loading ? (
        <ListItem>
          <Loader alignment='0 auto' size={40} color='#848080' />
        </ListItem>
      ) : (
        Object.keys(items).map(key => (
          <ListItem
            key={key}
            onClick={() => {
              onSelect({ key, value: items[key].city });
            }}>
            {items[key].city}, {items[key].country}
          </ListItem>
        ))
      )}
    </List>
  );
}

const { shape, string, bool, func } = PropTypes;

DropdownList.propTypes = {
  items: shape({
    [string]: shape({
      county: string.isRequired,
      city: string.isRequired
    })
  }),
  loading: bool.isRequired,
  onSelect: func.isRequired
};

DropdownList.defaultProps = {
  items: {}
};

export default function AutocompleteSearch({ city: { value }, onChange }) {
  const [t] = useTranslation();

  const {
    data,
    loading,
    error,
    isOpen,
    handleChange,
    handleBlur,
    handleFocus
  } = useAutocomplete(value, onChange);

  if (error) {
    throw error;
  }

  return (
    <Wrapper>
      <Input
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

AutocompleteSearch.propTypes = {
  city: shape({
    key: string,
    value: string
  }).isRequired,
  onChange: func.isRequired
};
