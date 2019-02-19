import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const TimeOfDay = styled.span`
  padding-bottom: 15px;
  font-size: 1.25em;
  transition: color 200ms ease-out;
  font-weight: bold;
`;

export const WeatherIcon = styled.img.attrs({
  alt: "Weather icon"
})`
  width: 75px;
  height: 45px;
  margin: 10px auto;
`;

export const Temperature = styled.span`
  padding-bottom: 15px;
  font-size: 1.7em;
  transition: color 200ms ease-out;
`;

export const WeatherDescription = styled.span`
  padding-bottom: 15px;
  font-size: 1.05em;
  color: ${({ theme }) => theme.secondaryColor};
  transition: color 200ms ease-out;
`;

export const RealFeelTemperature = styled.span`
  padding-bottom: 15px;
  color: ${({ theme }) => theme.secondaryColor};
  span:nth-child(2) {
    font-weight: bold;
    color: ${({ theme }) => theme.primaryColor};
    transition: color 200ms ease-out;
  }
`;
