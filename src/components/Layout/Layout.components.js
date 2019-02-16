import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.primaryColor};
  transition: background-color 200ms ease-out;
`;
