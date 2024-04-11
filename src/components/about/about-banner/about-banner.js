import React from 'react';
import { AboutBannerContainer, ContentContainer, Heading } from './style';
import Navbar from '../../navbar-black/navbar'; // Import Navbar component

const AboutBanner = () => {
    return (
        <AboutBannerContainer>
            <Navbar />
            <ContentContainer>
                <Heading>About Us</Heading>
            </ContentContainer>
        </AboutBannerContainer>
    );
};

export default AboutBanner;
