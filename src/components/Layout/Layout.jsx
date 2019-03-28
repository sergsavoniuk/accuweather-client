import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Layout.components';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
