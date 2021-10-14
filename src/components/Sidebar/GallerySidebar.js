import React from 'react'
import {
    GallerySidebarContainer,
    Icon,
    CloseIcon,
    GallerySidebarWrapper,
    GallerySidebarMenu,
    GallerySidebarLink,
    SideBtnWrap,
    GallerySidebarRoute
} from './GallerySidebarElements'

export const GallerySidebar = ({ isOpen, toggle }) => {
    return (
        <GallerySidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <GallerySidebarWrapper>
                <GallerySidebarMenu>
                    <GallerySidebarLink to='/#start'>START</GallerySidebarLink>
                    <GallerySidebarLink to='/#offer'>OFERTA</GallerySidebarLink>
                    <GallerySidebarLink to='/#aboutUs'>O NAS</GallerySidebarLink>
                    <GallerySidebarLink to='/#galleryMain'>GALERIA</GallerySidebarLink>
                    <GallerySidebarLink to='/#movies'>FILMY</GallerySidebarLink>
                    <GallerySidebarLink to='/#contact'>KONTAKT</GallerySidebarLink>
                </GallerySidebarMenu>
            </GallerySidebarWrapper>
        </GallerySidebarContainer>
    )
}
