import React, { useEffect } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu'; 
import Social from '../components/Socials';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  background: #fdf6e3; 
`;

const MainContent = styled.main`
  flex: 1;
  margin-top: 100px; 
  padding: 20px;
  padding-top: 180px;
  display: flex;
  gap: 40px;

  /* Add responsive behavior for smaller screens */
  @media (max-width: 768px) {
    flex-direction: column; 
    padding: 20px;
  }
`;

const TextSection = styled.section`
  flex: 1;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const InstagramFeed = styled.section`
  flex: 1; 
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  blockquote {
    max-width: 100%; 
    margin: 0 auto;
    padding: 0;
    width: 100%;
    border: 0;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    blockquote {
      width: calc(100% - 20px);
    }
  }
`;

const AboutUs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <PageWrapper>
      <Menu />
      <MainContent>
        {/* Left side content */}
        <TextSection>
          <h1>About Us</h1>
          <p>Learn more about our story and passion for great coffee and food.</p>
          <p>
            Le Café Pomme has been serving delightful coffee, pastries, and an unforgettable
            ambiance since its inception. Our passion for quality and community drives
            everything we do.
          </p>
          <Social />
        </TextSection>

        {/* Instagram Feed Section */}
        <InstagramFeed>
          <h2>Follow Us on Instagram</h2>
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/CxX_n5ctzln/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: 0,
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px auto',
              maxWidth: '90%',
              padding: '0',
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href="https://www.instagram.com/reel/CxX_n5ctzln/?utm_source=ig_embed&amp;utm_campaign=loading"
                style={{
                  background: '#FFFFFF',
                  lineHeight: '0',
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
                target="_blank"
                rel="noreferrer"
              >
                View this post on Instagram
              </a>
            </div>
          </blockquote>
        </InstagramFeed>
      </MainContent>
    </PageWrapper>
  );
};

export default AboutUs;
