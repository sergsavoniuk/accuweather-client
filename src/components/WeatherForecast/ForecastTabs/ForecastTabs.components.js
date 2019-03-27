import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const ForecastTabListItem = styled.button`
  padding: 30px;
  padding-bottom: 10px;
  background-color: transparent;
  border: none;
  border-bottom: ${props =>
    props.active
      ? `1px solid ${props.theme.button.borderBottomColor}`
      : "none"};
  font-family: IBM Plex Mono, Space Grotesk, Roboto Slab, sans-serif;
  color: ${({ theme }) => theme.primaryColor};
  transition: color 200ms ease-out;
  font-size: 1.4em;
  cursor: pointer;
  outline: none;

  @media (max-width: 425px) {
    padding: 10px;
  }

  @media (max-width: 320px) {
    padding: 5px;
    font-size: 1.3em;
  }
`;

export const RefreshButton = styled.button`
  background: transparent;
  border: none;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`;
