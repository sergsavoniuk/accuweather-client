import styled from "styled-components";

export const CardContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 20px;
  box-shadow: 0px 1px 3px 1px ${({ theme }) => theme.card.boxShadowColor};
  cursor: pointer;

  @media (min-width: 1024px) {
    margin-left: 12px;
  }

  @media (max-width: 768px) {
    :nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 425px) {
    margin-right: 0;
  }

  @media (max-width: 320px) {
    width: 300px;
    margin-right: 0;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  margin: 0;
  padding: 10px 7px;
`;

export const Separator = styled.hr`
  margin: 0 15px;
`;
