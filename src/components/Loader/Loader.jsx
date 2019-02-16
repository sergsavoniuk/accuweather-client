import React from "react";

import { Box, Child } from "./Loader.components";

const Loader = ({ margin, size, color }) => (
  <Box margin={margin} size={size}>
    {Array.from({ length: 12 }, (_, index) => (
      <Child key={index} color={color} />
    ))}
  </Box>
);

export default Loader;
