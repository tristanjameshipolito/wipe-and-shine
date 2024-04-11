import React, { useState, useRef, useEffect } from 'react';
import { Nav, LogoContainer, LogoImg, LogoTextContainer, LogoTextLine, NavLinkContainer, NavLink, GetQuoteButton, DrawerButton, DrawerContainer, DrawerNavLink } from './style';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo(1).png';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const drawerRef = useRef(null);
    const location = useLocation();

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsSticky(currentScrollPos > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutsideDrawer = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target)) {
                setIsDrawerOpen(false);
            }
        };

        document.body.addEventListener('mousedown', handleClickOutsideDrawer);
        return () => {
            document.body.removeEventListener('mousedown', handleClickOutsideDrawer);
        };
    }, []);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLinks = ['Home', 'About', 'Services', 'Contact'];

    return (
        <>
            <Nav ref={drawerRef} isSticky={isSticky} isAbout={location.pathname === '/about'}>
                <LogoContainer>
                    <LogoImg src={logoImg} alt="Logo" />
                    <LogoTextContainer>
                        <LogoTextLine bold>WIPE AND SHINE</LogoTextLine>
                        <LogoTextLine smaller>Cleaning Services</LogoTextLine>
                    </LogoTextContainer>
                </LogoContainer>
                <NavLinkContainer>
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            as={Link}
                            to={`/${link.toLowerCase()}`}
                            isActive={() => link.toLowerCase() === location.pathname.substr(1)}
                            isSticky={isSticky}
                        >
                            {link}
                        </NavLink>
                    ))}
                    <GetQuoteButton as={Link} to="/quote">
                        Get a Quote
                    </GetQuoteButton>
                </NavLinkContainer>
                <DrawerButton onClick={toggleDrawer}>&#9776;</DrawerButton>
            </Nav>
            <DrawerContainer open={isDrawerOpen} ref={drawerRef}>
                {navLinks.map((link, index) => (
                    <DrawerNavLink key={index} as={Link} to={`/${link.toLowerCase()}`}>
                        {link}
                    </DrawerNavLink>
                ))}
                <DrawerNavLink as={Link} to="/quote">
                    Get a Quote
                </DrawerNavLink>
            </DrawerContainer>
        </>
    );
};

export default Navbar;
