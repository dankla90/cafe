import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.nav`
  position: fixed;
  right: 0;
  top: 55%;
  transform: translateY(-50%);
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
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    display: flex;
  }
`;

const MenuItem = styled(NavLink)`
  background: #8c614c;
  color: #fff;
  padding: 20px;
  border-radius: 10px 0 0 10px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  &.active {
    background: #d4a373;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    background: none;
    color: #8c614c;
    padding: 10px;
    text-align: left;
    font-family: 'Georgia', serif;
    font-size: 1.5em;
    border: none;
    border-bottom: 1px solid #8c614c;
    width: 80%;
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

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <ToggleButton
        $isOpen={isOpen}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </ToggleButton>
      <MenuWrapper $isOpen={isOpen}>
        <MenuItem to="/" end>
          Home
        </MenuItem>
        <MenuItem to="/menu">
          Menu
        </MenuItem>
        <MenuItem to="/menu2">
          Menu2
        </MenuItem>
        <MenuItem to="/aboutus">
          About Us
        </MenuItem>
        <MenuItem to="/contact">
          Contact
        </MenuItem>
      </MenuWrapper>
    </>
  );
};

export default Menu;
