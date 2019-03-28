import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 13px;
  left: 10px;
`;

const Button = styled.button`
  width: 32px;
  height: 21px;
  border: none;
  padding: 0;
  margin-right: 5px;
  cursor: pointer;
`;

export const RussianFlagIcon = styled(Button)`
  background: url(${process.env.PUBLIC_URL}/images/ru_flag.png);
`;

export const BritainFlagIcon = styled(Button)`
  background: url(${process.env.PUBLIC_URL}/images/en_flag.png);
`;
