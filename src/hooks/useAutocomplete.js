import { useEffect, useReducer, useRef } from "react";
import axios from "axios";

import {
  transformResponseData,
  formatUrl
} from "components/SearchCity/AutocompleteSearch/utils";

const initialState = {
  data: {},
  loading: false,
  error: null
};

const reducer = (state, newState) => {
  return { ...state, ...newState };
};

export default function useAutocomplete(onChange) {
  const [state, setState] = useReducer(reducer, initialState);
  const cancelTokenSource = useRef(null);
  const userInput = useRef("");

  const handleChange = event => {
    const value = event.target.value;
    userInput.current = value;
    onChange({ key: null, value });
  };

  const fetchData = async () => {
    if (userInput.current !== "") {
      try {
        setState({ loading: true });

        const data = await axios(formatUrl(userInput.current), {
          cancelToken: cancelTokenSource.current.token
        });

        setState({
          data: transformResponseData(data),
          loading: false
        });
      } catch (error) {
        if (!axios.isCancel(error)) {
          setState({ error });
        }
      }
    }
  };

  useEffect(() => {
    cancelTokenSource.current = axios.CancelToken.source();

    fetchData();

    return () => {
      setState({ loading: false });
      cancelTokenSource.current.cancel();
    };
  }, [userInput.current]);

  return {
    ...state,
    handleChange
  };
}
