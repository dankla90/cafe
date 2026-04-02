'use client'

import { useState } from 'react'
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/components/Header'
import { openingHours } from '@/data/hours'
import { FaInstagram, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
  min-height: 100vh;
  background: #fdf6e3;

  @media (max-width: 768px) {
    padding-top: ${MOBILE_HEADER_HEIGHT}px;
  }
`

/* ─── Banner ─────────────────────────────────────────────────── */

const Banner = styled.div`
  position: relative;
  height: 340px;
  background-image: url('/barista.jpg');
  background-size: cover;
  background-position: center 30%;

  @media (max-width: 768px) {
    height: 220px;
  }
`

const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const BannerTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`

const BannerDivider = styled.div`
  width: 50px;
  height: 3px;
  background: #ddb892;
  border-radius: 2px;
`

/* ─── Content ────────────────────────────────────────────────── */

const Content = styled.div`
  display: flex;
  gap: 0;
  min-height: 560px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

const InfoPanel = styled.div`
  width: 380px;
  flex-shrink: 0;
  background: #4e3728;
  padding: 56px 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 900px) {
    width: 100%;
    padding: 40px 32px;
    gap: 32px;
    align-items: center;
    text-align: center;
  }
`

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InfoLabel = styled.p`
  font-size: 0.7rem !important;
  font-family: var(--font-bagnard), serif !important;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #ddb892 !important;
  margin-bottom: 2px;
`

const InfoLine = styled.p`
  font-size: 1rem !important;
  font-family: var(--font-bagnard), serif !important;
  color: rgba(255, 255, 255, 0.85) !important;
  line-height: 1.75 !important;
`

const InfoLink = styled.a`
  font-size: 1rem;
  font-family: var(--font-bagnard), serif;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  line-height: 1.75;
  transition: color 0.2s;

  &:hover {
    color: #ddb892;
  }
`

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 4px;
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #ddb892;
    border-color: #ddb892;
  }
`

/* ─── Map ─────────────────────────────────────────────────────── */

const MapSection = styled.section`
  flex: 1;
  min-height: 560px;

  iframe {
    width: 100%;
    height: 100%;
    min-height: 560px;
    border: 0;
    display: block;
  }

  @media (max-width: 900px) {
    min-height: 380px;

    iframe {
      min-height: 380px;
    }
  }
`

const MapPlaceholder = styled.div`
  flex: 1;
  min-height: 560px;
  background: #f0e6d3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 900px) {
    min-height: 280px;
  }
`

const MapIcon = styled.div`
  font-size: 2rem;
  color: #8c614c;
  opacity: 0.6;
`

const MapLoadBtn = styled.button`
  font-family: var(--font-bagnard), serif;
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4a3a29;
  background: none;
  border: 1px solid #ddb892;
  padding: 12px 32px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #4a3a29;
    color: white;
  }
`

const MapNote = styled.p`
  font-size: 0.75rem !important;
  color: #8c614c !important;
  font-family: var(--font-bagnard), serif !important;
  letter-spacing: 0.06em;
  text-align: center;
  max-width: 260px;
  line-height: 1.6 !important;
`

export default function Contact() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <PageWrapper>
      <Banner>
        <BannerOverlay>
          <BannerTitle>Contact</BannerTitle>
          <BannerDivider />
        </BannerOverlay>
      </Banner>

      <Content>
        <InfoPanel aria-label="Contact information">
          <InfoBlock>
            <InfoLabel>Find us</InfoLabel>
            <InfoLine>Nøstegaten 47</InfoLine>
            <InfoLine>5010 Bergen</InfoLine>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Opening hours</InfoLabel>
            {openingHours.periods.map((p) => (
              <InfoLine key={p.days}>
                {p.days}: {p.hours}
              </InfoLine>
            ))}
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Get in touch</InfoLabel>
            <InfoLink href="tel:+4755091100">+47 55 09 11 00</InfoLink>
            <InfoLink href="mailto:lafrenchtouch.co@gmail.com">
              lafrenchtouch.co@gmail.com
            </InfoLink>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel>Follow us</InfoLabel>
            <SocialRow>
              <SocialIcon
                href="https://www.instagram.com/lecafe.no/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Le Café Pomme on Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </SocialIcon>
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61553088848116"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Le Café Pomme on Facebook"
              >
                <FaFacebook aria-hidden="true" />
              </SocialIcon>
            </SocialRow>
          </InfoBlock>
        </InfoPanel>

        {mapLoaded ? (
          <MapSection aria-label="Map showing Le Café Pomme location">
            <iframe
              title="Le Café Pomme location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800!2d5.312865313119024!3d60.392505475042924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfdc29bedba1d%3A0x785ef24a7a7de8ec!2sLe%20Caf%C3%A9%20Pomme!5e1!3m2!1sen!2sno!4v1736510817611!5m2!1sen!2sno"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapSection>
        ) : (
          <MapPlaceholder aria-label="Map not yet loaded">
            <MapIcon aria-hidden="true"><FaMapMarkerAlt /></MapIcon>
            <MapLoadBtn onClick={() => setMapLoaded(true)}>
              Vis kart
            </MapLoadBtn>
            <MapNote>
              Kartet lastes fra Google Maps og kan sette informasjonskapsler.{' '}
              <InfoLink href="/personvern" style={{ fontSize: 'inherit', lineHeight: 'inherit', color: '#8c614c' }}>
                Les mer
              </InfoLink>
            </MapNote>
          </MapPlaceholder>
        )}
      </Content>
    </PageWrapper>
  )
}
