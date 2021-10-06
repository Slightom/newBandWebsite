import React from "react";
import {
  TeamMemberCard as TeamMemberCard,
  AboutUsContainer,
  TeamH2,
  TeamP,
  AboutUsWrapper,
  ImgWrap,
  Img,
  TeamH3,
  TeamMemberTextContainer,
} from "./AboutUsElements";

export const AboutUs = () => {
  return (
    <AboutUsContainer id="aboutUs">
      {/* <TeamH1>Nasz skład</TeamH1> */}
      <AboutUsWrapper>
        <TeamMemberCard>
          <ImgWrap>
            <Img src={require('../../images/_piotrek.jpg').default} />
          </ImgWrap>
          <TeamMemberTextContainer>
            <TeamH2>Piotr Maestro!</TeamH2>
            <TeamH3>klawisz - akordeon - wokal - wodzirej</TeamH3>
            <TeamP>Ogromne doświadczenie! Zna wszystkie utwory świata we wszystkich językach, zagra każdą biesiadę, uwielbia pieśni rosyjskie, prowadzi imprezy dowcipnie i kulturalnie. Człowiek orkiestra, Prawdziwy Maestro!</TeamP>
          </TeamMemberTextContainer>
        </TeamMemberCard>
        <TeamMemberCard>
          <ImgWrap>
            <Img src={require('../../images/_aneta.jpg').default} />
          </ImgWrap>
          <TeamH2>Aneta</TeamH2>
          <TeamH3>altówka - wokal</TeamH3>
          <TeamP>Z Piotrem Maestro tworzy muzyczny duet od 10 lat! Absolwentka UMFC w Białymstoku, prześliczna altowiolistka! Każdej imprezie nadaje romantycznego, góralskiego charakteru pięknymi dźwiękami altówki. Goście są zawsze zachwyceni!</TeamP>
        </TeamMemberCard>
        <TeamMemberCard>
          <ImgWrap>
            <Img src={require('../../images/_monika.jpg').default} />
          </ImgWrap>
          <TeamH2>Monika</TeamH2>
          <TeamH3>wokal</TeamH3>
          <TeamP>Cudowna barwa głosu! Gdy śpiewa przeboje Edyty Górniak, goście wstają z podziwu! Absolwentka studium wokalno-aktorskiego, laureatka licznych konkursów wokalnych, autorka tekstów, aktorka, uczestniczka programu "Must be the music".</TeamP>
        </TeamMemberCard>
        <TeamMemberCard>
          <ImgWrap>
            <Img src={require('../../images/_tomek.jpg').default} />
          </ImgWrap>
          <TeamMemberTextContainer>
            <TeamH2>Tomek</TeamH2>
            <TeamH3>wokal - wodzirej - manager</TeamH3>
            <TeamP>Wulkan energii! Szroki repertuar od Presley'a, przez Martyniuka po Ronnie Ferrari, uczestnik "Szansy na sukces". Dba o harmonijny przebieg imprezy, razem z Piotrem Maestro prowadzi błyskotliwą konferansjerkę.</TeamP>
          </TeamMemberTextContainer>
        </TeamMemberCard>
      </AboutUsWrapper>
    </AboutUsContainer>
  );
};
