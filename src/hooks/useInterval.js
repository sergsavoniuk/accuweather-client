import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const interval = useRef(null);
  useEffect(() => {
    interval.current = setInterval(callback, delay);
    return () => clearInterval(interval.current);
  });
}
