import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    justify-content: space-around;
  }
`;
