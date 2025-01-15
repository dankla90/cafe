import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 250px;
  background-image: url('/OldPictureCafe.jpg');
  background-color: ${(props) => (props.hidden ? 'transparent' : 'rgba(255, 255, 255, 0.5)')};
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 80%;
  box-shadow: ${(props) => (props.hidden ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)')};
  z-index: 1100;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  transform: ${(props) => (props.hidden ? 'translateY(-100%)' : 'translateY(0)')};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const Logo = styled(Link)`
  font-family: 'Gwendolyn', serif;
  font-size: 5rem;
  color: white;
  text-decoration: none;
  padding-left: 0.5em;
  z-index: 2;

  &:hover {
    color: #8c614c;
  }

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeaderLogo = styled.img`
  padding-top: 5px;
  height: 10em;
  width: auto;
  z-index: 2;

  @media (max-width: 400px) {
    display: none;
  }

  @media (max-width: 768px) {
    height: 5em;
  }
`;

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 100; // Threshold to hide/reveal the header
      const nearTopThreshold = 20; // Distance from the top for the header to reappear

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        // User is scrolling down past the threshold
        setHidden(true);
      } else if (currentScrollY < nearTopThreshold) {
        // User scrolls close to the top
        setHidden(false);
      }

      // Update last scroll position
      lastScrollY = currentScrollY;
      setScrollPosition(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper hidden={hidden}>
      <Logo to="/">Le Café Pomme</Logo>
      <HeaderLogo src="/Logo.png" alt="Cafe Pomme Logo" />
    </HeaderWrapper>
  );
};

export default Header;
