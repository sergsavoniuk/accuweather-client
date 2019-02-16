const LocalStorage = () => {
  const prefix = "accuweather_data";

  const serialize = (data = {}) => JSON.stringify(data);

  const deserialize = (json = "{}") => JSON.parse(json);

  return {
    set(key, value) {
      localStorage.setItem(
        prefix,
        serialize({
          ...deserialize(localStorage.getItem(prefix) || undefined),
          [key]: value
        })
      );
    },

    get(key) {
      return deserialize(localStorage.getItem(prefix) || undefined)[key];
    },

    remove(key) {},

    clear() {
      localStorage.clear();
    }
  };
};

export default LocalStorage();
