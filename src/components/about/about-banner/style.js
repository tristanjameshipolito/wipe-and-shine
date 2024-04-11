import styled from 'styled-components';
import AboutBannerImage from '../../../assets/AboutBanner.jpg'; // Import about banner image

export const AboutBannerContainer = styled.div`
    background-image: url(${AboutBannerImage});
    background-size: cover;
    background-position: center;
    height: 100vh;
    max-height: 500px; /* Set max-height to 250px */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.6);
    }
`;

export const ContentContainer = styled.div`
    max-width: 800px;
    padding: 20px;
    z-index: 1;

    /* Set text color to black */
    color: #000;
`;

export const Heading = styled.h1`
    font-size: 5em;
    margin-bottom: 200px;
    letter-spacing: 5px;
`;