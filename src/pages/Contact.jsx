import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Social from '../components/Socials';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fdf6e3;
`;

const MainContent = styled.main`
  flex: 1;  
  margin-top: 100px; 
  padding: 20px;
  padding-top: 180px;
  display: flex;
  gap: 20px;
  padding-bottom: 50px;
  padding-right: 30px;

  @media (max-width: 768px) {
    padding: 20px; 
    flex-direction: column;
    padding-top: 20px;
  }
`;


const TextSection = styled.section`
  flex: 1;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 2%;

  #FrontPhoto {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  h1 {
    font-family: 'Georgia', serif;
    color: #8c614c;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Georgia', serif;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333;

    &:last-child {
      font-weight: bold;
    }
  }


`;
const MapSection = styled.section`
  flex: 1;  
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%; 
  Min-height: 300px;

  iframe {
    min-height: 300px;
    width: 100%;  
    height: 100%; 
    border: 0;
  }

  /* Adjustments for smaller screens */
  @media (max-width: 768px) {
    height: 100%;  
    padding-bottom: 0; 
  }
`;


const Contact = () => {
  return (
    <PageWrapper>
      <Menu />
      <MainContent>
        <TextSection>
          <img src="/contactImage.jpg"
           id='FrontPhoto' alt="Contact Us" />
          <h1>Contact Us</h1>
          <p>Reach out to us for reservations, inquiries, or feedback.</p>
          <p>
            Email: <a href="mailto:lafrenchtouch.co@gmail.com">lafrenchtouch.co@gmail.com</a>
          </p>
          <p>Phone: +47 936 10 541</p>

          <Social />
        </TextSection>
        <MapSection>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2351.0572058137527!2d5.312865313119024!3d60.392505475042924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfdc29bedba1d%3A0x785ef24a7a7de8ec!2sLe%20Caf%C3%A9%20Pomme!5e1!3m2!1sen!2sno!4v1736510817611!5m2!1sen!2sno"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapSection>
      </MainContent>
    </PageWrapper>
  );
};

export default Contact;
