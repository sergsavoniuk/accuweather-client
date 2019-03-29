import React from 'react';

import {
  Notification,
  Title,
  Body,
} from './NetworkOfflineNotification.components';
import { useTranslation } from 'react-i18next';

const BASE_PREFIX = 'NetworkOfflineNotification';

export default function NetworkOfflineNotification() {
  const [t] = useTranslation();
  return (
    <Notification>
      <Title as="h3">{t(`${BASE_PREFIX}.title`)}</Title>
      <Body>{t(`${BASE_PREFIX}.body`)}</Body>
    </Notification>
  );
}
