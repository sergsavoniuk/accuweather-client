import styled from "styled-components";

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.table.borderColor};
  border-collapse: collapse;
  word-break: break-all;

  th,
  td {
    border-bottom: 1px solid ${({ theme }) => theme.table.borderColor};
  }

  td {
    height: 85px;
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

export const TableHead = styled.th`
  padding: 15px;
  text-align: left;

  :nth-child(2) {
    text-align: center;
  }

  :nth-child(3) {
    text-align: right;
  }
`;

export const TableRow = styled.tr`
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
`;

export const TableData = styled.td`
  padding: 10px;
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherDescription = styled.span`
  font-size: 0.9em;
`;

export const Temperature = styled.span`
  font-size: 1.3em;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
`;

export const WeatherIcon = styled.img.attrs({
  alt: "Weather Icon"
})`
  width: 75px;
  height: 45px;
`;

export const InnerBox = styled.div`
  display: flex;
  align-items: center;
`;
