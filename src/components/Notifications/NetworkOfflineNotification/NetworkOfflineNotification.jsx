import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Notification,
  Title,
  Body,
} from './NetworkOfflineNotification.components';

import { useOfflineNotification } from 'components/Contexts/NetworkNotificationContext';

const BASE_PREFIX = 'NetworkOfflineNotification';

export default function NetworkOfflineNotification() {
  const { showNotification } = useOfflineNotification();
  const [t] = useTranslation();
  return (
    showNotification && (
      <Notification>
        <Title as="h3">{t(`${BASE_PREFIX}.title`)}</Title>
        <Body>{t(`${BASE_PREFIX}.body`)}</Body>
      </Notification>
    )
  );
}
