import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { HeroSection } from "../components/HeroSection/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Offer } from "../components/Offer/Offer";
import { Photos } from "../components/Photos/Photos";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Offer />
      <AboutUs />
      <Photos />
      <Footer />
    </Router>
  );
};
