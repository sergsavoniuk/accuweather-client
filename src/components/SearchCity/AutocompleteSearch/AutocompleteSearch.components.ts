import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 7px 10px 7px 10px;
  border: 2px solid #9b9b9b;
  height: 50px;
  outline: none;
  font-size: 1.3em;
  font-family: IBM Plex Mono, Space Grotesk, Roboto Slab, sans-serif;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  color: ${({ theme }) => theme.dropdown.color};
  background: ${({ theme }) => theme.dropdown.backgroundColor};
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const DropdownListItem = styled.li`
  display: block;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.dropdown.borderColor};
  :hover {
    background: ${({ theme }) => theme.dropdown.hoveredBackground};
    cursor: pointer;
  }
`;
