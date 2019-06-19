interface SerializableObject {
  [key: string]: any;
}

function LocalStorage() {
  const PREFIX: string = 'accuweather_data';

  function serialize(data: SerializableObject = {}): string {
    return JSON.stringify(data);
  }

  function deserialize(json: string | null = '{}'): SerializableObject {
    return JSON.parse(json!);
  }

  return {
    set(key: string, value: string) {
      localStorage.setItem(
        PREFIX,
        serialize({
          ...deserialize(localStorage.getItem(PREFIX) || undefined),
          [key]: value,
        }),
      );
    },

    get(key: string) {
      return deserialize(localStorage.getItem(PREFIX) || undefined)[key];
    },

    remove(key: string | string[]) {
      const data = deserialize(localStorage.getItem(PREFIX));
      const keys = Array.isArray(key) ? [...key] : [key];

      const newData = Object.keys(data).reduce(
        (filteredData, currentKey) => {
          if (!keys.includes(currentKey)) {
            filteredData[currentKey] = data[currentKey];
          }
          return filteredData;
        },
        {} as SerializableObject,
      );

      localStorage.setItem(PREFIX, serialize(newData));
    },

    clear() {
      localStorage.clear();
    },
  };
}

const localStorageInstance = LocalStorage();
export { localStorageInstance };
