import React from 'react';

import { Wrapper, Child } from './Loader.components';

export interface Props {
  alignment?: string;
  size?: number;
  color?: string;
}

function Loader({ alignment, size, color }: Props) {
  return (
    <Wrapper alignment={alignment} size={size}>
      {Array.from({ length: 12 }, (_, index) => (
        <Child key={index} color={color} />
      ))}
    </Wrapper>
  );
}

export default Loader;
