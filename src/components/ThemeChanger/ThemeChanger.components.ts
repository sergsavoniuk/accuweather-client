import styled from 'styled-components';

export const Wrapper = styled.div``;

export const UncheckedIcon = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/moon.png`,
  alt: 'Moon icon',
})`
  margin-top: -3px;
`;

export const CheckedIcon = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/sun.png`,
  alt: 'Sun icon',
})``;
