import React, { useState } from "react";
import Video from "../../videos/PMstartMovie.mp4";
import { ArrowForward, ArrowRight, NavLinks } from "../../shared/Elements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from "./HeroElements";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id="start">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>GRAM<span style={{ color: '#01bf71' }}>BIT</span></HeroH1>
        <HeroP>Zadbaj o świetną zabawę na swojej imprezie razem z nami!</HeroP>
        <NavLinks
          to="offer"
          smooth={true}
          duration={1200}
          spy={true}
          exact="true"
          offset={-80}
          onMouseEnter={onHover} onMouseLeave={onHover}>
          Przejdź do oferty! <ArrowRight />
        </NavLinks>
      </HeroContent>
    </HeroContainer>
  );
};
