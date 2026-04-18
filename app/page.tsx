'use client'

import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/components/Header'
import Socials from '@/components/Socials'
import { openingHours } from '@/data/hours'
import styled, { keyframes } from 'styled-components'

/* ─── Hero ─────────────────────────────────────────────────── */

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  background-image: url('/OldPictureCafe.jpg');
  background-size: cover;
  background-position: center 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.52);
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: ${HEADER_HEIGHT + 20}px 24px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding-top: ${MOBILE_HEADER_HEIGHT + 16}px;
  }
`

const HeroStamp = styled.img`
  height: 110px;
  width: auto;
  filter: brightness(0) invert(1);
  opacity: 0.9;

  @media (max-width: 768px) {
    height: 80px;
  }
`

const HeroTitle = styled.h1`
  font-family: var(--font-gwendolyn), serif;
  font-size: 5.5rem;
  color: white;
  text-shadow: 0 2px 16px rgba(0, 0, 0, 0.5);
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
`

const HeroTagline = styled.p`
  font-family: var(--font-bagnard), serif;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.18em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`

const HeroScroll = styled.div`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--font-bagnard), serif;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  animation: ${bounce} 2s ease-in-out infinite;
`

const HeroHours = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 12px;

  strong {
    display: block;
    color: #ddb892;
    font-family: var(--font-bagnard), serif;
    font-size: 0.85rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  span {
    color: rgba(255, 255, 255, 0.75);
    font-family: var(--font-bagnard), serif;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
  }
`

/* ─── Welcome ───────────────────────────────────────────────── */

const WelcomeSection = styled.section`
  background: #fdf6e3;
  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const WelcomeLeft = styled.div`
  flex: 0 0 60%;
  padding: 80px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media (max-width: 1024px) {
    padding: 64px 40px;
  }

  @media (max-width: 768px) {
    padding: 56px 24px;
  }
`

const WelcomeRight = styled.div`
  flex: 0 0 40%;
  position: relative;

  img {
    position: absolute;
    top: 40px;
    right: 48px;
    bottom: 40px;
    left: 0;
    width: calc(100% - 48px);
    height: calc(100% - 80px);
    object-fit: cover;
    border-radius: 12px;
    display: block;
  }

  @media (max-width: 768px) {
    height: 300px;

    img {
      position: static;
      width: calc(100% - 48px);
      height: 300px;
      margin: 0 24px 40px;
    }
  }
`

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #6b4e3d;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: #ddb892;
  border-radius: 2px;
`

const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 1.1rem;
    color: #4a3a29;
    line-height: 1.9;
  }
`

/* ─── Photo Grid ────────────────────────────────────────────── */

const GridSection = styled.section`
  background: #f5e1c6;
  padding: 72px 40px;

  @media (max-width: 768px) {
    padding: 48px 16px;
  }
`

const GridTitle = styled.h2`
  font-size: 2.6rem;
  color: #6b4e3d;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 28px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`

const GridImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 6px;
  display: block;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.02);
    opacity: 0.92;
  }
`

const GridInstagramLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 32px;
  font-family: var(--font-bagnard), serif;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8c614c;
  text-decoration: none;
  border-bottom: 1px solid #ddb892;
  padding-bottom: 2px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  transition: color 0.2s;

  &:hover {
    color: #6b4e3d;
  }
`

const gridPhotos = [
  { src: '/gallery/pastry-tray.jpg', alt: 'Pastries and coffee on a tray' },
  { src: '/gallery/croissants.jpg', alt: 'Fresh croissants and viennoiserie' },
  { src: '/gallery/paris-brest.jpg', alt: 'Paris-Brest with hot chocolate' },
  { src: '/gallery/desserts.jpg', alt: 'Selection of patisserie desserts' },
  { src: '/gallery/chef-outside.jpg', alt: 'Chef outside Le Café Pomme with berry pavlova' },
  { src: '/gallery/eclairs.jpg', alt: 'Chocolate and berry éclairs' },
]

/* ─── Info Bar ──────────────────────────────────────────────── */

const InfoBar = styled.section`
  background: #4e3728;
  color: white;
  padding: 64px 40px;

  @media (max-width: 768px) {
    padding: 48px 32px;
  }
`

const InfoInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const InfoLabel = styled.p`
  font-size: 0.72rem !important;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ddb892 !important;
  font-family: var(--font-bagnard), serif !important;
`

const InfoValue = styled.p`
  font-size: 1rem !important;
  color: rgba(255, 255, 255, 0.9) !important;
  line-height: 1.8 !important;
  font-family: var(--font-bagnard), serif !important;
`

const InfoLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-bagnard), serif;
  font-size: 1rem;
  line-height: 1.8;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #ddb892;
  }
`


export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection aria-label="Hero">
        <HeroOverlay />
        <HeroContent>
          <HeroStamp src="/Logo.png" alt="Le Café Pomme stamp logo" />
          <HeroTitle>Le Café Pomme</HeroTitle>
          <HeroTagline>Kafé &amp; Konditori · Nøstegaten, Bergen</HeroTagline>
          <HeroHours aria-label="Opening hours">
            <strong>Come visit us</strong>
            {openingHours.periods.map((p) => (
              <span key={p.days}>{p.days}: {p.hours}</span>
            ))}
          </HeroHours>
        </HeroContent>
        <HeroScroll aria-hidden="true">
          <span>↓</span>
        </HeroScroll>
      </HeroSection>

      {/* Welcome */}
      <WelcomeSection aria-label="Welcome">
        <WelcomeLeft>
          <SectionTitle>Bienvenue</SectionTitle>
          <Divider />
          <WelcomeText>
            <p>
              Welcome to Le Café Pomme — your cozy corner in Bergen for exceptional coffee, fresh
              pastries, and warm, welcoming vibes. Whether you&apos;re stopping in for breakfast,
              lunch, or just a quiet afternoon with something sweet, our café is the perfect place
              to relax and enjoy the taste of France.
            </p>
            <p>
              Vi er en koselig fransk-inspirert kafé og konditori i hjertet av Bergen. Vi serverer
              frokost og lunsj daglig — fra ferske croissanter om morgenen til quiche og smørbrød
              midt på dagen. Vi baker med de beste norske råvarene fra lokale produsenter, og flere
              av våre bakverk er tilgjengelig i glutenvennlige varianter. Kom gjerne innom!
            </p>
          </WelcomeText>
          <Socials />
        </WelcomeLeft>
        <WelcomeRight>
          <img src="/frontpage.jpg" alt="Inside Le Café Pomme — French-inspired café in Bergen" />
        </WelcomeRight>
      </WelcomeSection>

      {/* Info bar */}
      <InfoBar aria-label="Opening hours and location">
        <InfoInner>
        <InfoBlock>
          <InfoLabel>Opening hours</InfoLabel>
          {openingHours.periods.map((p) => (
            <InfoValue key={p.days}>
              {p.days}: {p.hours}
            </InfoValue>
          ))}
        </InfoBlock>
        <InfoBlock>
          <InfoLabel>Find us</InfoLabel>
          <InfoValue><InfoLink href="/contact">Nøstegaten 47</InfoLink></InfoValue>
          <InfoValue><InfoLink href="/contact">5010 Bergen</InfoLink></InfoValue>
        </InfoBlock>
        <InfoBlock>
          <InfoLabel>Get in touch</InfoLabel>
          <InfoLink href="tel:+4755091100">+47 55 09 11 00</InfoLink>
          <InfoLink href="mailto:bestilling.lecafepomme@gmail.com">bestilling.lecafepomme@gmail.com</InfoLink>
        </InfoBlock>
        </InfoInner>
      </InfoBar>

      {/* Photo grid */}
      <GridSection aria-label="Photo gallery">
        <GridTitle>From the kitchen</GridTitle>
        <Grid>
          {gridPhotos.map((photo) => (
            <GridImg key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
          ))}
        </Grid>
        <GridInstagramLink
          href="https://www.instagram.com/lecafe.no/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Le Café Pomme on Instagram"
        >
          Follow us on Instagram @lecafe.no
        </GridInstagramLink>
      </GridSection>

    </>
  )
}
