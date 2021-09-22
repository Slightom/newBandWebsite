import React, { useState } from "react";
import { Button } from "react-scroll";
import { ArrowForward, ArrowRight, NavLinks } from "../../shared/Elements";
import { Column1, Column2, Heading, Img, ImgWrap, OfferContainer, OfferWrapper, Subtitle, TextWrapper, TopLine } from "./OfferElements";


export const Offer = () => {
    const lightBg = true;
    const darkText = true;
    const lightText = false;

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    const description =
        'Kochamy swoją pracę! Prowadzimy imprezy kulturalnie, z energią i uśmiechem, a połączenie doświadczenia z młodością pozwala nam trafiać w gusta młodszych i starszych nastolatków. Gramy w niezmiennym składzie od kilku lat! Naszym celem jest Twoja satysfakcja oraz jak największa frekwencja na parkiecie! Dysponujemy własnym oświetleniem scenicznym oraz sprzętem wysokiej jakości: Bose, Mackie, Yamaha, Shure, Akg.\n\n* prowadzenie imprez\n* marsz na wyjście z domu\n* oprawa ślubu\n* biesiada przy stołach\n* pomysłowa animacja uczestników imprezy\n* szeroki repertuar muzyczny';
    return (
        <>
            <OfferContainer lightBg={lightBg} id={'offer'}>
                <OfferWrapper>
                    <Column1>
                        <TextWrapper>
                            <TopLine>THE BEST SONG</TopLine>
                            <Heading lightText={lightText}>OFERTA</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                        <div style={{}}>
                            <NavLinks
                                to="aboutUs"
                                smooth={true}
                                duration={800}
                                spy={true}
                                exact="true"
                                offset={-80}
                                onMouseEnter={onHover} onMouseLeave={onHover}>
                                O nas! <ArrowRight />
                            </NavLinks>
                        </div>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={require('../../images/offer.jpg').default} />
                        </ImgWrap>
                    </Column2>
                </OfferWrapper>
            </OfferContainer>
        </>
    );
};
