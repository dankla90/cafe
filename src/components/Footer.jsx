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
`;

const FooterLogo = styled.img`
  width: 5em;  
  height: auto; 
  vertical-align: middle; 
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2024 Le Café Pomme | All rights reserved</p>
      <FooterLogo src="/Logo.png" alt="Cafe Pomme Logo" /> 
      <p>Website by Daniel Klausen</p>
    </FooterWrapper>
  );
};

export default Footer;
