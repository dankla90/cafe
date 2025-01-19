import React, { useEffect } from 'react';
import styled from 'styled-components';

const InstagramWrapper = styled.section`
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  min-width: 30%;

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

const InstagramPost = ({ url }) => {
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
    <InstagramWrapper>
      <h2>Follow Us on Instagram</h2>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink={url}
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
            href={url}
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
    </InstagramWrapper>
  );
};

export default InstagramPost;
