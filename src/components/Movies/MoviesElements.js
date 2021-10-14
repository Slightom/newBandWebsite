import styled from "styled-components";

export const MoviesContainer = styled.div`
  color: #fff;
  background: black;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const MoviesWrapper = styled.div`
  min-height: 860px;
  padding: 50px 20px;
  max-width: 1300px;
  margin: 0 auto;
`;

export const YouTubeSquare = styled.div`
  width: 80%;
  border: 2px solid red;
  background: rgba(255, 255, 255, .2);
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const ImgWrap = styled.div`
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const Img = styled.img`
`;