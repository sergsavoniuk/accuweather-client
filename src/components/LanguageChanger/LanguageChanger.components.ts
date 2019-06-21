import styled from 'styled-components';

export const Wrapper = styled.div``;

const Button = styled.button`
  width: 32px;
  height: 21px;
  box-sizing: content-box;
  border: none;
  padding: 0;
  margin-right: 5px;
  cursor: pointer;
`;

interface ButtonProps {
  active: boolean;
}

export const RussianLanguageButton = styled(Button)<ButtonProps>`
  background: url(${process.env.PUBLIC_URL}/images/ru_flag.png);
  ${({ active, theme }) => active && `border: 3px solid ${theme.primaryColor}`}
`;

export const BritishLanguageButton = styled(Button)<ButtonProps>`
  background: url(${process.env.PUBLIC_URL}/images/en_flag.png);
  ${({ active, theme }) => active && `border: 3px solid ${theme.primaryColor}`}
`;
