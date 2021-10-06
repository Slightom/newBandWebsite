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
} from "./NavbarElements";

export const Navbar = ({ toggle }) => {
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
                <NavLinks
                  to="start"
                  smooth={true}
                  duration={1200}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  START
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="offer"
                  smooth={true}
                  duration={1200}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  OFERTA
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="aboutUs"
                  smooth={true}
                  duration={1200}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  O NAS
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="galleryMain"
                  smooth={true}
                  duration={1200}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  GALERIA
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="movies"
                  smooth={true}
                  duration={1200}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  FILMY
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};
