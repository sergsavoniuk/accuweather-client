import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

interface ForecastTabListItemProps {
  active: boolean;
  children: React.ReactNode;
}

export const ForecastTabListItem = styled.button<ForecastTabListItemProps>`
  padding: 30px;
  padding-bottom: 10px;
  background-color: transparent;
  border: none;
  border-bottom: ${({ active, theme }) =>
    active ? `1px solid ${theme.button.borderBottomColor}` : 'none'};
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

  ${({ disabled }) => disabled && 'cursor: not-allowed'}
`;
