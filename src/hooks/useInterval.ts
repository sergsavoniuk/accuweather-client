import { useEffect, useRef } from 'react';

export default function useInterval(callback: Function, delay: number): void {
  const interval = useRef<number | undefined>(undefined);
  useEffect(() => {
    interval.current = setInterval(callback, delay);
    return () => clearInterval(interval.current);
  });
}
