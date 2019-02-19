import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1200px) {
    justify-content: space-around;
  }
`;
