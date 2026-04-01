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

const Banner = styled.div`
  position: relative;
  height: 340px;
  background-image: url('/gallery/eclairs.jpg');
  background-size: cover;
  background-position: center 50%;

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

const Header = styled.div`
  padding: 64px 40px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    padding: 48px 24px 32px;
  }
`


const Subtitle = styled.p`
  font-size: 1rem;
  color: #8c614c;
  letter-spacing: 0.08em;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 40px 72px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px 56px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }
`

const GridImg = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 4px;
  display: block;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.02);
    opacity: 0.9;
  }
`

const InstagramCta = styled.div`
  text-align: center;
  padding: 0 24px 72px;

  a {
    display: inline-block;
    font-family: var(--font-bagnard), serif;
    font-size: 0.9rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #8c614c;
    text-decoration: none;
    border-bottom: 1px solid #ddb892;
    padding-bottom: 2px;
    transition: color 0.2s;

    &:hover {
      color: #6b4e3d;
    }
  }
`

const photos = [
  { src: '/gallery/pastry-tray.jpg', alt: 'Pastries and coffee on a tray' },
  { src: '/gallery/croissants.jpg', alt: 'Fresh croissants and viennoiserie' },
  { src: '/gallery/paris-brest.jpg', alt: 'Paris-Brest with hot chocolate' },
  { src: '/gallery/desserts.jpg', alt: 'Patisserie desserts on plates' },
  { src: '/gallery/chef-outside.jpg', alt: 'Chef outside the café with berry pavlova' },
  { src: '/gallery/eclairs.jpg', alt: 'Chocolate and berry éclairs' },
  { src: '/gallery/baker-quiche.jpg', alt: 'Baker with freshly baked quiches' },
  { src: '/gallery/caprese.jpg', alt: 'Caprese toast with tomato and mozzarella' },
  { src: '/gallery/summer-food.jpg', alt: 'Summer food and drinks outside' },
  { src: '/gallery/ig1.jpg', alt: 'Seasonal dessert from Le Café Pomme' },
  { src: '/gallery/ig2.jpg', alt: 'Fresh pastries at Le Café Pomme Bergen' },
  { src: '/gallery/ig3.jpg', alt: 'Coffee and treats at Le Café Pomme' },
]

export default function Gallery() {
  return (
    <PageWrapper>
      <Banner>
        <BannerOverlay>
          <BannerTitle>Gallery</BannerTitle>
          <BannerDivider />
        </BannerOverlay>
      </Banner>
      <Header>
        <Subtitle>From the kitchen and beyond</Subtitle>
      </Header>
      <Grid aria-label="Photo gallery">
        {photos.map((photo) => (
          <GridImg key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
        ))}
      </Grid>
      <InstagramCta>
        <a
          href="https://www.instagram.com/lecafe.no/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Le Café Pomme on Instagram"
        >
          Follow us on Instagram @lecafe.no
        </a>
      </InstagramCta>
    </PageWrapper>
  )
}
