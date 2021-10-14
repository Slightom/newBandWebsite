import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { animateScroll as scroll, ScrollLink } from "react-scroll";
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
} from "./GalleryNavbarElements";

export const GalleryNavbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/#start">
                                    START
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#offer">
                                    OFERTA
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#aboutUs">
                                    O NAS
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#galleryMain">
                                    GALERIA
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#movies">
                                    FILMY
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/#contact">
                                    KONTAKT
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};
