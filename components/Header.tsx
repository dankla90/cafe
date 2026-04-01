'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { FaHome, FaUser, FaImages, FaEnvelope } from 'react-icons/fa'

export const HEADER_HEIGHT = 80
export const MOBILE_HEADER_HEIGHT = 64
export const MOBILE_BOTTOM_NAV_HEIGHT = 60

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT}px;
  background-color: #7a5c4a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: ${MOBILE_HEADER_HEIGHT}px;
    padding: 0 20px;
    justify-content: center;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`

const LogoImg = styled.img`
  height: 42px;
  width: auto;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    height: 34px;
  }
`

const LogoText = styled.span`
  font-family: var(--font-gwendolyn), serif;
  font-size: 1.7rem;
  color: white;
  letter-spacing: 0.02em;

`

const NavLinks = styled.nav`
  display: flex;
  gap: 36px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-bagnard), serif;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => (p.$active ? '#ddb892' : 'rgba(255,255,255,0.8)')};
  text-decoration: none;
  border-bottom: 2px solid ${(p) => (p.$active ? '#ddb892' : 'transparent')};
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: #ddb892;
    border-color: #ddb892;
  }
`

/* ─── Bottom nav (mobile only) ───────────────────────────────── */

const BottomNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: ${MOBILE_BOTTOM_NAV_HEIGHT}px;
    background: #4a3a29;
    z-index: 1000;
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.25);
  }
`

const BottomNavItem = styled(Link)<{ $active: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-decoration: none;
  color: ${(p) => (p.$active ? '#ddb892' : 'rgba(255,255,255,0.5)')};
  transition: color 0.2s;

  svg {
    font-size: 1.2rem;
  }

  span {
    font-family: var(--font-bagnard), serif;
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &:hover {
    color: #ddb892;
  }
`

const navItems = [
  { href: '/', label: 'Home', icon: <FaHome /> },
  { href: '/about', label: 'About', icon: <FaUser /> },
  { href: '/gallery', label: 'Gallery', icon: <FaImages /> },
  { href: '/contact', label: 'Contact', icon: <FaEnvelope /> },
]

const Header = () => {
  const pathname = usePathname()

  return (
    <>
      <HeaderWrapper>
        <LogoLink href="/" aria-label="Le Café Pomme — home">
          <LogoImg src="/Logo.png" alt="" aria-hidden="true" />
          <LogoText>Le Café Pomme</LogoText>
        </LogoLink>

        <NavLinks aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} $active={pathname === item.href}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </HeaderWrapper>

      <BottomNav aria-label="Mobile navigation">
        {navItems.map((item) => (
          <BottomNavItem key={item.href} href={item.href} $active={pathname === item.href} aria-label={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </BottomNavItem>
        ))}
      </BottomNav>
    </>
  )
}

export default Header
