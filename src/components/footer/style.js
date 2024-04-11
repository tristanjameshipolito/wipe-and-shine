import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #384e8a;
  color: white;
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 50px 10px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 100px; /* Add left and right margin of 100px */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;

export const FooterBlock = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const BlockTitle = styled.h3`
  font-size: 30px; /* Main title font size */
  margin-bottom: 10px;
  line-height: 1.2; /* Adjust line height for main title */
`;

export const BlockContent = styled.div`
  font-size: 20px; /* Other text font size */
  line-height: 1.5; /* Adjust line height for other text */
  flex-grow: 1;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex-grow: 1;
`;

export const FormInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 20px; /* Input font size */
`;

export const FormTextarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 20px; /* Textarea font size */
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 20px; /* Button font size */
  background-color: #ec1d26;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #c61720;
  }
`;
