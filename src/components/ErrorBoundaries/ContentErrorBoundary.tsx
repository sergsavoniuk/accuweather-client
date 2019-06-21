import React, { Component } from 'react';

import { Wrapper, ErrorMessage } from './ContentErrorBoundary.components';

interface State {
  hasError: boolean | null;
}

interface Props {
  children?: React.ReactNode | null;
}

export default class ContentErrorBoundary extends Component<Props, State> {
  state = {
    hasError: null,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <ErrorMessage />
        </Wrapper>
      );
    }

    return this.props.children;
  }
}
