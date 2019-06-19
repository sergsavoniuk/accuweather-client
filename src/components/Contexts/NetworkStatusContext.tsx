import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from 'react';

interface INetworkStatusContext {
  isOnline: boolean;
  setIsOnline: React.Dispatch<React.SetStateAction<boolean>>;
}

const NetworkStatusContext = createContext<INetworkStatusContext | null>(null);

const NETWORK_STATUSES = ['online', 'offline'];

function NetworkStatusProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const value = useMemo(() => ({ isOnline, setIsOnline }), [isOnline]);

  useEffect(() => {
    const [ONLINE, OFFLINE] = NETWORK_STATUSES;

    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener(ONLINE, handleOnline);
    window.addEventListener(OFFLINE, handleOffline);

    return () => {
      window.removeEventListener(ONLINE, handleOnline);
      window.removeEventListener(OFFLINE, handleOffline);
    };
  }, []);

  return (
    <NetworkStatusContext.Provider value={value}>
      {children}
    </NetworkStatusContext.Provider>
  );
}

function useNetworkStatus() {
  const context = useContext(NetworkStatusContext);

  if (!context) {
    throw new Error(
      'useNetworkStatus must be used within a NetworkStatusProvider',
    );
  }

  const { isOnline } = context;

  return {
    isOnline,
  };
}

export { NetworkStatusProvider, useNetworkStatus };
