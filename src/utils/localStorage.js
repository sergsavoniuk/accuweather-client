const LocalStorage = () => {
  const PREFIX = "accuweather_data";

  const serialize = (data = {}) => JSON.stringify(data);

  const deserialize = (json = "{}") => JSON.parse(json);

  return {
    set(key, value) {
      localStorage.setItem(
        PREFIX,
        serialize({
          ...deserialize(localStorage.getItem(PREFIX) || undefined),
          [key]: value
        })
      );
    },

    get(key) {
      return deserialize(localStorage.getItem(PREFIX) || undefined)[key];
    },

    remove(key) {
      const data = deserialize(localStorage.getItem(PREFIX));
      const keys = [...key];

      const newData = Object.keys(data).reduce((filteredData, currentKey) => {
        if (!keys.includes(currentKey)) {
          filteredData[currentKey] = data[currentKey];
        }
        return filteredData;
      }, {});

      localStorage.setItem(PREFIX, serialize(newData));
    },

    clear() {
      localStorage.clear();
    }
  };
};

export default LocalStorage();
