import React from 'react';
import { HomeBannerContainer, ContentContainer, Heading, Paragraph, Button} from './style';
import Navbar from '../../navbar/navbar'; // Import Navbar component

const HomeBanner = () => {
    return (
        <HomeBannerContainer>
            <Navbar />
            <ContentContainer>
                <Heading>Illuminate Your Days</Heading>
                <Paragraph>You are in good hands. We clean. You relax.</Paragraph>
                <Button href="#">Get a Quote</Button>
            </ContentContainer>
        </HomeBannerContainer>
    );
};

export default HomeBanner;
