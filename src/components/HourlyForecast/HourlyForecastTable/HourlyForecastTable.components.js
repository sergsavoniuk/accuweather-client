import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.table.borderColor};
  border-collapse: collapse;
  word-break: break-all;

  th,
  td {
    border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
  }

  th {
    padding: 15px;
    text-align: left;

    :nth-child(2) {
      text-align: center;
    }

    :nth-child(3) {
      text-align: right;
    }
  }

  tr {
    td:nth-child(1) {
      padding-left: 15px;
      text-align: left;
      color: ${({ theme }) => theme.table.timeColumnTextColor};
    }

    td:nth-child(2) {
      text-align: center;
    }

    td:nth-child(3) {
      text-align: right;
      padding-right: 15px;
    }

    :hover {
      background-color: ${({ theme }) => theme.table.hoverColor};
      cursor: pointer;
    }
  }

  td {
    height: 85px;
    padding: 10px;
    color: ${({ theme }) => theme.secondaryColor};
  }

  @media (min-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 769px) {
    width: 80%;
  }

  @media (max-width: 426px) {
    width: 90%;
  }

  @media (max-width: 376px) {
    width: 95%;
  }
`;

export const WeatherDescription = styled.span`
  font-size: 0.9em;
`;

export const Temperature = styled.span`
  font-size: 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
  transition: color 200ms ease-out;
`;

export const WeatherIcon = styled.img.attrs({
  alt: "Weather Icon"
})`
  width: 75px;
  height: 45px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerWrapper = styled(Wrapper)`
  flex-direction: row;
`;
