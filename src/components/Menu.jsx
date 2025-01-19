import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const MenuWrapper = styled.nav`
  position: fixed;
  top: 20px;
  right: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fdf6e3;
    transform: ${(props) => (props.$isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 25px 20px;
  background: #8c614c;
  color: white;
  border-radius: 10px 0 0 10px;
  text-decoration: none;
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  text-align: left;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #d4a373;
    transform: scale(1.05);
  }

  &.active {
    background: #d4a373;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    text-align: center;
    border-radius: 0;
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1200;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }

  .line {
    background-color: #8c614c;
    height: 4px;
    width: 40px;
    border-radius: 2px;
    position: absolute;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${(props) =>
        props.$isOpen ? 'rotate(45deg) translate(0px, 0px)' : 'translateY(-12px)'};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isOpen ? 0 : 1)};
      transform: scale(${(props) => (props.$isOpen ? 0.5 : 1)});
    }

    &:nth-child(3) {
      transform: ${(props) =>
        props.$isOpen ? 'rotate(-45deg) translate(0px, 0px)' : 'translateY(12px)'};
    }
  }
`;

const BackToTopButton = styled.button`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 25px 20px;
  background: #8c614c;
  color: white;
  border: none;
  border-radius: 10px 0 0 10px;
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #d4a373;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    text-align: center;
    border-radius: 0;
    font-size: 1rem;
    padding: 20px 10px;
  }
`;


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  // Close menu and scroll to top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  // Show "Back to Top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      setShowBackToTop(window.scrollY > pageHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ToggleButton $isOpen={isOpen} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </ToggleButton>

      <MenuWrapper $isOpen={isOpen}>
        {location.pathname !== '/' && (
          <MenuItem to="/" aria-label="Home">
            <Icon src="/HomeIcon.png" alt="Home Icon" />
            Home
          </MenuItem>
        )}
        {location.pathname !== '/contact' && (
          <MenuItem to="/contact" aria-label="Contact">
            <Icon src="/ContactIcon.png" alt="Contact Icon" />
            Contact
          </MenuItem>
        )}
      <BackToTopButton show={showBackToTop ? 'true' : undefined} onClick={scrollToTop} aria-label="Back to Top">
        <FaArrowUp />
      </BackToTopButton>

      </MenuWrapper>
    </>
  );
};

export default Menu;
