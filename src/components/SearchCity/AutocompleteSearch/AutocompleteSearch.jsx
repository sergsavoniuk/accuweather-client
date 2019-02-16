import React, { useState, useEffect } from "react";

import Loader from "components/Loader";
import useAutocomplete from "hooks/useAutocomplete";
import {
  Box,
  Input,
  DropdownList as List,
  DropdownListItem as ListItem
} from "./AutocompleteSearch.components";

export const DropdownList = ({ items, loading, onSelect }) => {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
    return () => setOpen(false);
  }, [items]);

  return (
    isOpen && (
      <List>
        {loading ? (
          <ListItem>
            <Loader margin="0 auto" size={40} color="#848080" />
          </ListItem>
        ) : (
          Object.keys(items).map(key => (
            <ListItem
              key={key}
              onClick={() => {
                onSelect({ key, value: items[key].city });
                setOpen(false);
              }}
            >
              {items[key].city}, {items[key].country}
            </ListItem>
          ))
        )}
      </List>
    )
  );
};

export default function AutocompleteSearch({ city: { value }, onChange }) {
  const { data, loading, error, handleChange } = useAutocomplete(onChange);

  if (error) {
    throw error;
  }

  return (
    <Box>
      <Input value={value} onChange={handleChange} />
      {loading || Object.keys(data).length > 0 ? (
        <DropdownList items={data} loading={loading} onSelect={onChange} />
      ) : null}
    </Box>
  );
}
