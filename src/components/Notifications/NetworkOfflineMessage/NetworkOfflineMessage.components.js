import styled from 'styled-components';

export const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 0;
  height: 28px;
  background-color: #daa520;
  color: #4c4c4c;
  border: 2px solid
    ${props => (props.theme.themeName === 'dark' ? '#f0ffff' : '#282c35')};
`;
