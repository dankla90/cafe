'use client'

import styled from 'styled-components'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`

const Label = styled.p`
  font-family: var(--font-bagnard), serif;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8c614c;
`

const Icons = styled.div`
  display: flex;
  gap: 20px;
`

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b4e3d;
  font-size: 2.6rem;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: #ddb892;
    transform: scale(1.15);
  }
`

const Socials = () => {
  return (
    <Wrapper>
      <Label>Follow our story</Label>
      <Icons>
        <IconLink href="https://www.instagram.com/lecafe.no/" target="_blank" rel="noopener noreferrer" aria-label="Le Café Pomme on Instagram">
          <FaInstagram aria-hidden="true" />
        </IconLink>
        <IconLink href="https://www.facebook.com/profile.php?id=61553088848116" target="_blank" rel="noopener noreferrer" aria-label="Le Café Pomme on Facebook">
          <FaFacebook aria-hidden="true" />
        </IconLink>
      </Icons>
    </Wrapper>
  )
}

export default Socials
