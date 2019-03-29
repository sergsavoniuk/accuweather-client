import React from 'react';

import { Message } from './NetworkOfflineMessage.components';
import { useTranslation } from 'react-i18next';

export default function NetworkOfflineMessage() {
  const [t] = useTranslation();
  return <Message>{t('NetworkOfflineMessage.text')}</Message>;
}
