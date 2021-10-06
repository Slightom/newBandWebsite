import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Offer } from "../components/Offer/Offer";
import { Photos } from "../components/Photos/Photos";
import { GalleryMain } from "../components/GalleryMain/GalleryMain";
import { Movies } from "../components/Movies/Movies";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const location = window.location;

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView()
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location])

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Offer />
      <AboutUs />
      <GalleryMain />
      <Movies />
      <Footer />
    </>
  );
};
