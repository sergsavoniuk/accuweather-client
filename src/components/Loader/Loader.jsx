import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Child } from './Loader.components';

function Loader({ alignment, size, color }) {
  return (
    <Wrapper alignment={alignment} size={size}>
      {Array.from({ length: 12 }, (_, index) => (
        <Child key={index} color={color} />
      ))}
    </Wrapper>
  );
}

const { number, string } = PropTypes;

Loader.propTypes = {
  alignment: string,
  size: number,
  color: string,
};

Loader.defaultProps = {
  alignment: undefined,
  size: undefined,
  color: undefined,
};

export default Loader;
