import React from 'react';

import { Container } from './Layout.components';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}

export default Layout;
