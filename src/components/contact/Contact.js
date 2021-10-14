import React, { useState } from "react";
import { Button } from "react-scroll";
import { ArrowForward, ArrowRight, NavLinks } from "../../shared/Elements";
import { ContactContainer, ContactWrapper, Heading, Img, ImgWrap } from "./ContactElements";


export const Contact = () => {
    const lightBg = true;
    const darkText = true;
    const lightText = true;

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <ContactContainer lightBg={true} id={'contact'}>
                <Heading lightText={false}>Napisz maila, zadzwoń, porozmawiajmy :)</Heading>
                <ImgWrap>
                    <Img src={require('../../images/contact.png').default} />
                </ImgWrap>
            </ContactContainer>
        </>
    );
};
