import { useState, useEffect } from 'react';

export default function useNetworkStatus() {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setStatus(true);
    }

    function handleOffline() {
      setStatus(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return status;
}
