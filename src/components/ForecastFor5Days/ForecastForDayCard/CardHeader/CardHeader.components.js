import styled from "styled-components";

export const Box = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.card.titleColor};
  transition: color 200ms ease-out;
  text-transform: uppercase;
`;

export const Weekday = styled.span`
  font-weight: bold;
`;

export const CurrentDate = styled.span``;
