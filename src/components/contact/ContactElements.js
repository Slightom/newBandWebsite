import styled from "styled-components";

export const ContactContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  scroll-margin: 80px;
  min-height: 960px;
  
  display: grid;
  align-items: center;
  text-align: center;

`;


export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin-top: 100px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ImgWrap = styled.div`
//   height: 100%;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
  margin-bottom: 100px;
`;

export const Img = styled.img` 
  padding-right: 0;
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;