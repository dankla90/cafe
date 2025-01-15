import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #ddb892; /* Nice brown color */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 200px; /* Small box */

  gap: 20px;

  img {
    width: 6em; /* Adjust logo size */
    height: auto;
    margin-bottom: 10px;
    filter: invert(1);
  }
  p {
    padding: 0px;
    font-size: 2em;
    font-family: "Beau Rivage", cursive; 
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #6b4e3d; /* Darker brown for buttons */
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #a67c58; /* Slightly lighter brown on hover */
    transform: scale(1.1);
  }

  svg {
    font-size: 20px;
  }
`;

const SocialMediaButtons = () => {
  return (
    <SocialMediaWrapper>
      <img src="/Logo.png" id='Logo' alt="Cafe Logo" />
      <p>Find us on social media</p>
      <IconButton href="https://www.instagram.com/lecafe.no/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconButton>
      <IconButton href="https://www.facebook.com/profile.php?id=61553088848116" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </IconButton>
    </SocialMediaWrapper>
  );
};

export default SocialMediaButtons;
