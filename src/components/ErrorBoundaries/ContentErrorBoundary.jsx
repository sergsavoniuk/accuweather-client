import React, { Component } from "react";

import { Wrapper, ErrorMessage } from "./ContentErrorBoundary.components";

export default class ContentErrorBoundary extends Component {
  state = {
    hasError: null
  };

  static getDerivedStateFromError(error) {
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
