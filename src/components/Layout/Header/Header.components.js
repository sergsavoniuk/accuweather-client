import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4d4d4f;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
`;

export const BrandLogo = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/logo.png`,
  alt: 'Application Logo',
})``;

export const BrandName = styled.h1`
  margin-left: 10px;
  color: ${({ theme }) => theme.header.titleColor};
  transition: color 200ms ease-out;
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  padding: 15px;
  font-size: 1.4em;
  transition: color 200ms ease-out;
`;
