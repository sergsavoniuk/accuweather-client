import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const WeatherIcon = styled.img.attrs({
  alt: "Weather icon"
})`
  width: 75px;
  height: 45px;
`;

export const Temperature = styled.span`
  font-size: 2em;
  font-weight: bold;
  transition: color 200ms ease-out;
`;

export const Separator = styled.hr`
  display: block;
  width: 100%;

  height: 1px;
  margin: 20px 0;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.secondaryColor};
`;
