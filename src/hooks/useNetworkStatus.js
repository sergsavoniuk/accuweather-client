import { useState, useEffect } from 'react';

const NETWORK_STATUSES = ['online', 'offline'];

export default function useNetworkStatus() {
  const [status, setStatus] = useState(navigator.onLine);

  useEffect(() => {
    const [ONLINE, OFFLINE] = NETWORK_STATUSES;

    function handleOnline() {
      setStatus(true);
    }

    function handleOffline() {
      setStatus(false);
    }

    window.addEventListener(ONLINE, handleOnline);
    window.addEventListener(OFFLINE, handleOffline);

    return () => {
      window.removeEventListener(ONLINE, handleOnline);
      window.removeEventListener(OFFLINE, handleOffline);
    };
  }, []);

  return status;
}
