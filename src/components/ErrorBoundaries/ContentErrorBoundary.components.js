import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  @media (max-width: 769px) {
    margin-top: 0;
  }
`;

export const ErrorMessage = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/images/oops.png`,
  alt: "Something has gone wrong"
})`
  width: 100%;
  max-width: 800px;
  height: auto;
`;
