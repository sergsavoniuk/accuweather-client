import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import LanguageChanger from 'components/LanguageChanger';
import NetworkOfflineMessage from 'components/Notifications/NetworkOfflineMessage';
import ThemeChanger from 'components/ThemeChanger';
import { Wrapper } from './Settings.components';

function Settings({ currentLanguage }) {
  const isOnline = useContext(NetworkStatusContext);
  return (
    <Wrapper>
      <LanguageChanger currentLanguage={currentLanguage} />
      {!isOnline && <NetworkOfflineMessage />}
      <ThemeChanger />
    </Wrapper>
  );
}

const { string } = PropTypes;

Settings.propTypes = {
  currentLanguage: string.isRequired,
};

export default memo(Settings);
