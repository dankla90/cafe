'use client'

import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@/components/Header'
import styled from 'styled-components'

const PageWrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
  background: #fdf6e3;

  @media (max-width: 768px) {
    padding-top: ${MOBILE_HEADER_HEIGHT}px;
  }
`

const HeroImage = styled.div`
  width: 100%;
  height: 480px;
  background-image: url('/contactImage.jpg');
  background-size: cover;
  background-position: center 30%;

  @media (max-width: 768px) {
    height: 280px;
  }
`

const Content = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 72px 40px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 768px) {
    padding: 48px 24px;
    gap: 48px;
  }
`

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
`

const SectionTitle = styled.h1`
  font-size: 3.2rem;
  color: #6b4e3d;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`

const Divider = styled.div`
  width: 60px;
  height: 3px;
  background: #ddb892;
  border-radius: 2px;
`

const BodyText = styled.p`
  font-size: 1.1rem;
  color: #4a3a29;
  line-height: 1.9;
  max-width: 680px;
`

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const TwoColReverse = styled(TwoCol)`
  @media (min-width: 769px) {
    direction: rtl;

    & > * {
      direction: ltr;
    }
  }
`

const StoryText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    font-size: 2.4rem;
    color: #6b4e3d;
  }

  p {
    font-size: 1.05rem;
    color: #4a3a29;
    line-height: 1.9;
  }
`

const StoryImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
`

export default function About() {
  return (
    <PageWrapper>
      <HeroImage aria-label="Le Café Pomme team" role="img" />
      <Content>
        <Intro>
          <SectionTitle>Notre Histoire</SectionTitle>
          <Divider />
          <BodyText>
            Le Café Pomme is a French-inspired café and patisserie in the Nøstegaten neighbourhood
            of Bergen. We opened our doors with one goal: to bring authentic French baking to
            Norway, made with the finest local ingredients we could find.
          </BodyText>
        </Intro>

        <TwoCol>
          <StoryText>
            <h2>Where it started</h2>
            <p>
              It started with a stripped-back space on Nøstegaten and a lot of ambition. The three
              of us sat in an empty shell of a room — paint swatches on the wall, tools on the
              floor — and decided to build something we were proud of.
            </p>
            <p>
              Every detail of the café was thought through. The wood, the light, the smell of
              fresh croissants in the morning.
            </p>
          </StoryText>
          <StoryImage src="/gallery/renovation.jpg" alt="The team planning the cafe renovation" />
        </TwoCol>

        <TwoColReverse>
          <StoryText>
            <h2>The kitchen</h2>
            <p>
              Our pastry chef trained in France and brings classic technique to everything we
              make — from the lamination on the croissants to the glaze on our éclairs. Nothing
              leaves the kitchen unless it&apos;s right.
            </p>
            <p>
              We bake with Norwegian ingredients wherever possible. Local flour, local dairy,
              seasonal fruit. France taught us the technique. Norway gives us the ingredients.
            </p>
          </StoryText>
          <StoryImage src="/gallery/baker-quiche.jpg" alt="Baker with freshly baked quiches" />
        </TwoColReverse>

        <TwoCol>
          <StoryText>
            <h2>Come as you are</h2>
            <p>
              Le Café Pomme is for everyone. Breakfast before work, lunch with a friend, or a
              quiet afternoon with a book and a tartlet. We serve food from opening until close —
              Monday to Friday 08–18, Saturday and Sunday 10–18.
            </p>
            <p>
              You&apos;ll find us at Nøstegaten 47. We hope to see you soon.
            </p>
          </StoryText>
          <StoryImage src="/gallery/chef-outside.jpg" alt="Chef outside Le Café Pomme" />
        </TwoCol>
      </Content>
    </PageWrapper>
  )
}
