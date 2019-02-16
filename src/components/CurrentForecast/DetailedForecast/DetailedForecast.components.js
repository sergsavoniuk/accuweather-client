import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  align-items: flex-start;
  margin: 0;
  > span:not(:first-child) {
    font-size: 0.9em;
    padding: 3px;
  }
`;

export const Label = styled.span`
  color: ${({ theme }) => theme.secondaryColor};
  margin: ${props => props.margin};
`;

export const Value = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  transition: color 200ms ease-out;
`;
