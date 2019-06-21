import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react';

interface INetworkNotificationContext {
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
}

const NetworkNotificationContext = createContext<INetworkNotificationContext | null>(
  null,
);

function NetworkNotificationProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [showNotification, setShowNotification] = useState(false);
  const value = useMemo(() => ({ showNotification, setShowNotification }), [
    showNotification,
  ]);

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  }, [showNotification]);

  return (
    <NetworkNotificationContext.Provider value={value}>
      {children}
    </NetworkNotificationContext.Provider>
  );
}

function useOfflineNotification() {
  const context = useContext(NetworkNotificationContext);

  if (!context) {
    throw new Error(
      'useOfflineNotification must be used within a NetworkNotificationProvider',
    );
  }

  const { showNotification, setShowNotification } = context;
  const setShowOfflineNotification = useCallback(
    showNotificationFlag => setShowNotification(showNotificationFlag),
    [setShowNotification],
  );

  return {
    showNotification,
    setShowNotification: setShowOfflineNotification,
  };
}

export { NetworkNotificationProvider, useOfflineNotification };
