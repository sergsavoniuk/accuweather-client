import React from "react";

import { Wrapper, Child } from "./Loader.components";

const Loader = ({ alignment, size, color }) => (
  <Wrapper alignment={alignment} size={size}>
    {Array.from({ length: 12 }, (_, index) => (
      <Child key={index} color={color} />
    ))}
  </Wrapper>
);

export default Loader;
