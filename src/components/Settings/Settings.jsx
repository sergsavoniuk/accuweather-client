import React, { memo } from 'react';
import PropTypes from 'prop-types';

import LanguageChanger from 'components/LanguageChanger';
import NetworkOfflineMessage from 'components/Notifications/NetworkOfflineMessage';
import ThemeChanger from 'components/ThemeChanger';
import { Wrapper } from './Settings.components';

function Settings({
  currentLanguage,
  networkStatus: isOnline,
  theme: [theme, setTheme],
}) {
  return (
    <Wrapper>
      <LanguageChanger currentLanguage={currentLanguage} />
      {!isOnline && <NetworkOfflineMessage />}
      <ThemeChanger defaultTheme={theme} onChangeTheme={setTheme} />
    </Wrapper>
  );
}

const { string, bool, array } = PropTypes;

Settings.propTypes = {
  currentLanguage: string.isRequired,
  networkStatus: bool.isRequired,
  theme: array.isRequired,
};

export default memo(Settings);
