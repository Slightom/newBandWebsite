import styled from "styled-components";

export const AboutUsContainer = styled.div`
  min-height: 860px;
  display: flex;
  flex-direction: row;
  background: "#f9f9f9";
  margin-bottom: 60px;

`;

export const AboutUsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TeamMemberCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;

  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;
  border-right: 1px solid green;
  border-left: 1px solid green;
  &:hover {
    transform: scale(1.04);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  // height: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const TeamMemberTextContainer = styled.div`
  text-align: center;
`;

export const TeamH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 14px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TeamH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 6px;
`;

export const TeamH3 = styled.h3`
  font-size: 1rem;
  margin-bottom: 6px;
`;

export const TeamP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-left: 14px;
  margin-right: 14px;
`;

