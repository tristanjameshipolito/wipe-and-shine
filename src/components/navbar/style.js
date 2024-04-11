import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Nav = styled.nav`
    position: ${({ isSticky }) => (isSticky ? 'fixed' : 'absolute')};
    top: 0;
    left: 0;
    right: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ isSticky }) => (isSticky ? '#ffffff' : 'transparent')};
    color: ${({ isSticky, isAbout }) => (isSticky || isAbout ? '#000000' : '#ffffff')}; /* Change text color to black if isSticky or isAbout */
    box-shadow: ${({ isSticky }) => (isSticky ? '0px 2px 5px rgba(0, 0, 0, 0.2)' : 'none')};
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    z-index: 1000; /* Lower z-index for the Nav */
`;


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px; /* Adjust margin for mobile */

    @media (min-width: 768px) {
        margin-left: 100px; /* Move the logo 100px from left to right */
    }
`;

export const LogoImg = styled.img`
    width: 130px;
    height: auto;
    margin-right: 10px;
`;

export const LogoTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LogoTextLine = styled.span`
    font-size: ${({ bold }) => (bold ? '32px' : '20px')}; /* Adjust font size */
    line-height: 1.2;
    letter-spacing: 2px;
    ${({ bold }) => (bold ? 'font-weight: bold;' : 'font-weight: normal;')}
`;

export const NavLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    margin-right: 100px; /* Adjust margin for mobile */

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled(RouterNavLink)`
    position: relative;
    letter-spacing: 2px;
    margin-left: 20px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    color: ${({ isSticky }) => (isSticky ? '#000000' : '#ffffff')}; /* Default text color */
    
    /* Add styles for active NavLink */
    &.active {
        color: #EC1D26; /* Change color of active NavLink */
    }

    /* Hover effects */
    &:hover {
        &::before,
        &::after {
            width: 100%; /* Adjust width for animation */
            opacity: 1;
        }
    }

    /* Underline effect */
    &::before,
    &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        width: 0;
        height: 2px;
        background-color: #EC1D26;
        transition: width 0.3s ease, opacity 0.1s ease;
        opacity: 0;
    }

    &::before {
        left: 50%;
        transform: translateX(-50%);
    }

    &::after {
        right: 50%;
        transform: translateX(50%);
    }
`;

export const GetQuoteButton = styled.button`
    color: ${({ isSticky }) => (isSticky ? '#000000' : '#ffffff')}; /* Change text color based on isSticky */
    font-size: 1em;
    margin: 1em;
    background-color: transparent;
    padding: 0.5em 1em;
    border-radius: 25px;
    font-weight: bold;
    border: 2px solid white;
    text-decoration: none;
    transition: color 0.3s ease, background-color 0.3s ease, border 0.3s ease;

    &:hover {
        color: #ffffff; /* Change text color to white on hover */
        background-color: #EC1D26; /* Change background color to red on hover */
        border: 2px solid #EC1D26;
    }
`;


export const DrawerButton = styled.div`
    cursor: pointer;
    font-size: 40px;
    margin-left: auto;
    margin-right: 20px;

    @media (min-width: 768px) {
        display: none;
    }
`;

export const DrawerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: #ffffff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    transform: translateX(${props => (props.open ? '0' : '100%')});
    transition: transform 0.3s ease;
    z-index: 1100; /* Higher z-index for the DrawerContainer to appear above the Nav */

    @media (max-width: 768px) {
        width: 60%;
        transform: translateX(${props => (props.open ? '0' : '100%')});
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 15%;
    }
`;

export const DrawerNavLink = styled.a`
    text-decoration: none;
    color: #58585A;
    font-weight: bold;
    margin-bottom: 20px;
`;
