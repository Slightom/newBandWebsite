import styled from "styled-components";

export const PhotosContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
`;

export const PhotosWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr;
//   align-items: center;
//   grid-gap: 16px;

  z-index: 1;
  min-height: 860px;

//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr;
//   }
  
//   @media screen and (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
`;