import Link from 'next/link'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #4e3728;
  color: rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 20px 32px;

  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const FooterCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const FooterLogo = styled.img`
  width: 28px;
  height: auto;
  opacity: 0.5;
  filter: brightness(0) invert(1);
`

const FooterText = styled.span`
  font-family: var(--font-bagnard), serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
`

const FooterLink = styled.a`
  font-family: var(--font-bagnard), serif;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ddb892;
  }
`

const PersonvernLink = styled(FooterLink)`
  position: absolute;
  right: 32px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterCenter>
        <FooterLogo src="/Logo.png" alt="" aria-hidden="true" />
        <FooterText>© {new Date().getFullYear()} Le Café Pomme</FooterText>
        <FooterText style={{ opacity: 0.4 }}>·</FooterText>
        <FooterLink href="https://danielklausen.no" target="_blank" rel="noopener noreferrer">
          Website by Daniel Klausen
        </FooterLink>
      </FooterCenter>
      <PersonvernLink as={Link} href="/personvern">Personvern</PersonvernLink>
    </FooterWrapper>
  )
}

export default Footer
