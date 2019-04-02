import React, { memo, useContext } from 'react';
import PropTypes from 'prop-types';

import NetworkStatusContext from 'components/Contexts/NetworkStatusContext';
import LanguageChanger from 'components/LanguageChanger';
import NetworkOfflineMessage from 'components/Notifications/NetworkOfflineMessage';
import ThemeChanger from 'components/ThemeChanger';
import { Wrapper } from './Settings.components';

function Settings({ currentLanguage, theme: [theme, setTheme] }) {
  const isOnline = useContext(NetworkStatusContext);
  return (
    <Wrapper>
      <LanguageChanger currentLanguage={currentLanguage} />
      {!isOnline && <NetworkOfflineMessage />}
      <ThemeChanger defaultTheme={theme} onChangeTheme={setTheme} />
    </Wrapper>
  );
}

const { string, array } = PropTypes;

Settings.propTypes = {
  currentLanguage: string.isRequired,
  theme: array.isRequired,
};

export default memo(Settings);
