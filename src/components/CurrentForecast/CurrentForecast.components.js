import styled from "styled-components";

export const Box = styled.div`
  width: 350px;
  display: flex;
  padding: 15px;
  box-shadow: 0px 1px 3px 1px ${({ theme }) => theme.card.boxShadowColor};

  cursor: pointer;

  @media (max-width: 320px) {
    width: 300px;
  }
`;
