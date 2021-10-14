import React, { useEffect, useState } from "react";
import { Photos } from "../components/Photos/Photos";
import { GalleryNavbar } from "../components/Navbar/GalleryNavbar";
import { GallerySidebar } from "../components/Sidebar/GallerySidebar";

export const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const location = window.location;

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 })
    }, [location])

    return (
        <>
            <GallerySidebar isOpen={isOpen} toggle={toggle} />
            <GalleryNavbar toggle={toggle} />
            <Photos />
        </>
    );
};
