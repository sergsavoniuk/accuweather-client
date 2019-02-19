import styled from "styled-components";

export const StyledCardHeader = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.card.titleColor};
  transition: color 200ms ease-out;
  text-transform: uppercase;
`;
