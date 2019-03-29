import styled from 'styled-components';

export const Wrapper = styled.div`
  /* position: absolute;
  top: 13px;
  left: 10px; */
`;

const Button = styled.button`
  width: 32px;
  height: 21px;
  box-sizing: content-box;
  border: none;
  padding: 0;
  margin-right: 5px;
  cursor: pointer;
`;

export const RussianLanguageButton = styled(Button)`
  background: url(${process.env.PUBLIC_URL}/images/ru_flag.png);
  ${props => props.active && `border: 3px solid ${props.theme.primaryColor}`}
`;

export const BritishLanguageButton = styled(Button)`
  background: url(${process.env.PUBLIC_URL}/images/en_flag.png);
  ${props => props.active && `border: 3px solid ${props.theme.primaryColor}`}
`;
