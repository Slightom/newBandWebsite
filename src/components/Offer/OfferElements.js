import styled from "styled-components";

export const OfferContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  scroll-margin: 80px;
`;

export const OfferWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  grid-gap: 16px;

  z-index: 1;
  min-height: 860px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Column2 = styled.div`
`;

export const TextWrapper = styled.div`
  padding-top: 0;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: #000;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  white-space: pre-line;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
`;
