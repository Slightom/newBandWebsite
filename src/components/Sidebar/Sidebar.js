import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='start' activeClassName="selected" offset={-80} onClick={toggle}>START</SidebarLink>
                    <SidebarLink to='offer' activeClassName="selected" offset={-80} onClick={toggle}>OFERTA</SidebarLink>
                    <SidebarLink to='aboutUs' activeClassName="selected" offset={-80} onClick={toggle}>O NAS</SidebarLink>
                    <SidebarLink to='galleryMain' offset={-80} onClick={toggle}>GALERIA</SidebarLink>
                    <SidebarLink to='movies' offset={-80} onClick={toggle}>FILMY</SidebarLink>
                    <SidebarLink to='contact' offset={-80} onClick={toggle}>KONTAKT</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
