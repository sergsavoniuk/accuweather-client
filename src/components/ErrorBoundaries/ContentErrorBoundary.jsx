import React, { Component } from "react";

import { Box, AppErrorImage } from "./ContentErrorBoundary.components";

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
        <Box>
          <AppErrorImage />
        </Box>
      );
    }
    return this.props.children;
  }
}
