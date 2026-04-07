'use client'

import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/components/Header'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
  min-height: 100vh;
  background: #fdf6e3;

  @media (max-width: 768px) {
    padding-top: ${MOBILE_HEADER_HEIGHT}px;
  }
`

const Content = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 72px 40px 96px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 48px 24px 72px;
    gap: 32px;
  }
`

const PageTitle = styled.h1`
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
  margin-top: -16px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #6b4e3d;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const Body = styled.p`
  font-size: 1rem;
  color: #4a3a29;
  line-height: 1.85;
`

const Updated = styled.p`
  font-size: 0.8rem !important;
  color: #8c614c !important;
  font-family: var(--font-bagnard), serif !important;
  letter-spacing: 0.08em;
`

export default function Personvern() {
  return (
    <PageWrapper>
      <Content>
        <PageTitle>Personvern</PageTitle>
        <Divider />

        <Section>
          <Body>
            Le Café Pomme tar personvernet ditt på alvor. Denne siden forklarer hvilken informasjon
            vi samler inn, hvordan den brukes, og dine rettigheter som bruker.
          </Body>
        </Section>

        <Section>
          <SectionTitle>Behandlingsansvarlig</SectionTitle>
          <Body>
            Le Café Pomme<br />
            Nøstegaten 47, 5010 Bergen<br />
            E-post: bestilling.lecafepomme@gmail.com<br />
            Telefon: +47 55 09 11 00
          </Body>
        </Section>

        <Section>
          <SectionTitle>Hvilke opplysninger samler vi inn?</SectionTitle>
          <Body>
            Vi samler ikke inn personopplysninger direkte via denne nettsiden. Vi har ingen
            kontaktskjema, ingen brukerkontoer og ingen sporing av egne data.
          </Body>
        </Section>

        <Section>
          <SectionTitle>Google Maps</SectionTitle>
          <Body>
            Kontaktsiden inneholder en lenke til Google Maps. Kartet lastes kun inn dersom du
            aktivt trykker på «Vis kart»-knappen. Når kartet lastes, kan Google sette
            informasjonskapsler (cookies) i nettleseren din og samle teknisk informasjon i henhold
            til Googles egen personvernpolicy. Vi anbefaler at du leser{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#6b4e3d', textDecoration: 'underline' }}
            >
              Googles personvernerklæring
            </a>{' '}
            for mer informasjon.
          </Body>
        </Section>

        <Section>
          <SectionTitle>Informasjonskapsler (cookies)</SectionTitle>
          <Body>
            Nettsiden bruker ingen egne informasjonskapsler. Dersom du velger å laste inn kartet
            fra Google Maps, kan tredjeparts cookies bli satt av Google. Du kan til enhver tid
            slette informasjonskapsler i nettleserens innstillinger.
          </Body>
        </Section>

        <Section>
          <SectionTitle>Dine rettigheter</SectionTitle>
          <Body>
            Under GDPR har du rett til innsyn, retting og sletting av personopplysninger vi
            eventuelt måtte ha om deg. Ta kontakt med oss på bestilling.lecafepomme@gmail.com dersom
            du har spørsmål om personvern.
          </Body>
        </Section>

        <Updated>Sist oppdatert: mars 2025</Updated>
      </Content>
    </PageWrapper>
  )
}
