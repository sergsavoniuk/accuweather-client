import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Layout.components';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
