import styled from "styled-components";

export const PhotosContainer = styled.div`
  color: #fff;
  background: black;
  scroll-margin: 80px;
`;

export const PhotosWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   align-items: center;
//   grid-gap: 16px;

  z-index: 1;
  min-height: 860px;
  padding: 5px 20px;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr;
//   }
  
//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
`;

export const ImgWrap = styled.div`
  height: 100%;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
`;
