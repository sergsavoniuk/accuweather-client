import styled from 'styled-components';

export const Form = styled.form<{
  onSubmit: (event: React.MouseEvent) => void;
}>`
  width: 40%;
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    width: 90%;
  }
`;

export const Button = styled.button.attrs({
  type: 'submit',
})`
  height: 50px;
  background-color: ${({ theme }) => theme.button.backgroundColor};
  border: 2px solid #9b9b9b;
  color: #000;
  border-left: none;
  padding: 7px 10px 7px 10px;
  font-size: 1.3em;
  font-family: IBM Plex Mono, Space Grotesk, Roboto Slab, sans-serif;
  outline: none;
  cursor: pointer;
  transition: background-color 200ms ease-out;
`;
