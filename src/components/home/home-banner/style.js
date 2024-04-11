import styled from 'styled-components';
import HomeBanner from '../../../assets/banner.jpg';

export const HomeBannerContainer = styled.div`
    background-image: url(${HomeBanner});
    background-size: cover;
    background-position: center;
    height: 100vh;
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
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

export const ContentContainer = styled.div`
    max-width: 800px;
    padding: 20px;
    z-index: 1;
`;

export const Heading = styled.h1`
    font-size: 4em;
    margin-bottom: 20px;
    letter-spacing: 5px;
`;

export const Paragraph = styled.p`
    font-size: 1.5em;
    margin-bottom: 30px;
`;

export const Button = styled.a`
    display: inline-block;
    padding: 15px 30px;
    font-size: 1.2em;
    color: #fff;
    background-color: #007BFF;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;
