import React from 'react';
import { FooterContainer, GridContainer, FooterBlock, BlockTitle, BlockContent, ContactForm, FormInput, FormTextarea, SubmitButton } from './style';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const containerStyle = {
  width: '100%',
  height: '100%', // Adjust height to fill available space
};

const center = {
  lat: 51.05, // Latitude for the center of the map (Calgary)
  lng: -114.06, // Longitude for the center of the map (Calgary)
};

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FooterContainer>
      <div className="container">
        <GridContainer>
          <FooterBlock>
            <BlockTitle>Find Us Here</BlockTitle>
            <BlockContent>
              <LoadScript 
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Set your Google Maps API key here
              >
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={12} // Adjust the zoom level as needed
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript> 
            </BlockContent>
          </FooterBlock>
          <FooterBlock>
            <BlockTitle>Contact Details</BlockTitle>
            <BlockContent>
              <p style={{ fontSize: '20px', lineHeight: '1.5' }}>
                (587) 999-9999<br />
                email@sample.com<br />
                Calgary, Alberta<br />
                <FaFacebookF style={{ marginRight: '10px' }} />
                <FaLinkedinIn />
              </p>
            </BlockContent>
          </FooterBlock>
          <FooterBlock>
            <BlockTitle>Menu</BlockTitle>
            <BlockContent>
              <ul style={{ fontSize: '20px', lineHeight: '1.5' }}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact us</li>
              </ul>
            </BlockContent>
          </FooterBlock>
          <FooterBlock>
            <BlockTitle>Contact Us Today</BlockTitle>
            <BlockContent>
              <ContactForm onSubmit={handleSubmit}>
                <FormInput type="text" placeholder="Name" required />
                <FormInput type="email" placeholder="Email" required />
                <FormInput type="tel" placeholder="Phone Number" required />
                <FormTextarea rows="4" placeholder="Message" required />
                <SubmitButton type="submit">Send Message</SubmitButton>
              </ContactForm>
            </BlockContent>
          </FooterBlock>
        </GridContainer>
        <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '20px', lineHeight: '1.5' }}>
          © 2024 Wipe and Shine Cleaning Services Inc.
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
