import React from 'react';
import styled from 'styled-components';
import AboutBanner from '../../assets/AboutBanner.avif'; // Import the AVIF image

// Styled components
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns */
  grid-template-rows: 1fr; /* Single row */
  gap: 30px; /* Gap between grid items */
  padding: 20px;
  margin: 0 20px; /* Adjusted margin for responsiveness */

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr; /* Three columns for larger screens */
    margin: 0 100px; /* Added margin on both left and right sides for larger screens */
  }
`;

const TextColumn = styled.div`
  grid-column: 1 / 2; /* Span the first column */
`;

const ImageColumn1 = styled.div`
  margin-top: 50px;
  grid-column: 2 / 3; /* Span the second column */
  display: flex;
  flex-direction: column;
`;

const ImageColumn2 = styled.div`
  grid-column: 3 / 4; /* Span the third column */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GrayImage = styled.img`
  width: 100%; /* Ensure image takes full width of its container */
  height: 90%; /* Maintain aspect ratio */
  object-fit: cover; /* Cover the container */
  border-radius: 15px; /* Rounded corners with 12px radius */
`;

const BigText = styled.h2`
  color: #007BFF;
  font-size: 70px;
  line-height: 1;
  font-weight: bold;
  word-wrap: break-word;
  margin-bottom: 10px; /* Adjust margin bottom to bring closer to Text elements */

  @media (max-width: 768px) {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;


  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
  }
`;

// Component
const ThreeColumnLayout = () => {
  return (
    <Container>
      <TextColumn>
        {/* Text content spanning 50% of the width */}
        <BigText>
          Come Home to Clean Comfort
        </BigText>
        <Text>
          WITH OUR PROFESSIONAL CLEANING SERVICES
        </Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque lorem, varius vitae ex et, volutpat mattis quam. Nam efficitur ante sit amet consequat commodo. In tincidunt sem et turpis bibendum accumsan. Praesent interdum felis eu malesuada accumsan. Vivamus interdum, tellus sit amet tempor cursus, enim massa sollicitudin ante, eget rutrum lacus ex at velit. Mauris tincidunt ligula non purus finibus, vitae mattis metus pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum neque ut diam rutrum, consectetur imperdiet lacus tincidunt.
        </Text>
        <Text>
          Our dedicated team of cleaners is committed to transforming your home into a spotless sanctuary, and our attention to detail is unmatched. While we specialize in regular maintenance cleanings, we also offer deep cleaning sessions and move-in/move-out cleaning.
        </Text>
        <Text>
          Experience the unparalleled cleanliness that comes with our professional house cleaning services in Calgary and unlock the peace of a pristine living space.
        </Text>
      </TextColumn>
      <ImageColumn1>
        {/* Image 1 in the second column */}
        <GrayImage src={AboutBanner} alt="About Banner 1" />
      </ImageColumn1>
      <ImageColumn2>
        {/* First image in the third column */}
        <GrayImage src={AboutBanner} alt="About Banner 2" />
        {/* Second image (new) below the first image */}
        <GrayImage src={AboutBanner} alt="About Banner 3" />
      </ImageColumn2>
    </Container>
  );
};

export default ThreeColumnLayout;
