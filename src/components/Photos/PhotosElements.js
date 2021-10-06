import styled from "styled-components";

export const PhotosContainer = styled.div`
  color: #fff;
  background: black;
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

export const GalleryLoader = styled.div`
  background: rgba(0, 0, 0, .9);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`