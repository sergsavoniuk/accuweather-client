import { useState, useEffect } from 'react';

export default function useOfflineNotification() {
  const [showOfflineNotification, setShowOfflineNotification] = useState(false);

  useEffect(() => {
    if (showOfflineNotification) {
      setTimeout(() => {
        setShowOfflineNotification(false);
      }, 3000);
    }
  }, [showOfflineNotification]);

  return [showOfflineNotification, setShowOfflineNotification];
}
