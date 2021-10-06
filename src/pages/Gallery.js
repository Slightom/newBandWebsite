import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Photos } from "../components/Photos/Photos";
import { GalleryNavbar } from "../components/Navbar/GalleryNavbar";

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
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <GalleryNavbar toggle={toggle} />
            <Photos />
        </>
    );
};
