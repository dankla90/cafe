import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 15px;
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap; /* Ensures content wraps on smaller screens */
`;

const FooterLogo = styled.img`
  width: 5em;  
  height: auto; 
  vertical-align: middle; 
`;

const FooterText = styled.span`
  font-size: 0.9em; /* Adjust font size for better balance */
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© 2024 Le Café Pomme | All rights reserved</FooterText>
      <FooterLogo
        src={`${process.env.PUBLIC_URL}/Logo.png`}
        alt="Le Café Pomme Logo"
      />
      <FooterText>Website by Daniel Klausen</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
