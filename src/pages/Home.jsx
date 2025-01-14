import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';

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
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

const TextSection = styled.section`
  flex: 1;
  padding: 40px;
  background: linear-gradient(135deg, #fdf6e3, #f5e1c6);
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 3rem;
    color: #6b4e3d;
    margin-bottom: 16px;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    color: #4a3a29;
    line-height: 1.8;
    margin: 8px 0;
    text-align: justify;
  }

  li {
    font-size: 1.1rem;
    color: #4a3a29;
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    padding: 20px;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }

    li {
      font-size: 0.95rem;
    }
  }
`;

const DecorativeLine = styled.div`
  width: 90%;
  height: 4px;
  background: #ddb892;
  margin: 20px auto;
  border-radius: 2px;
`;

const OpeningHours = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: rgba(255, 250, 240, 0.8);
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1.3rem;
    color: #6b4e3d;
    margin-bottom: 12px;
  }

  li {
    font-size: 1.1rem;
    color: #4a3a29;
    margin: 8px 0;
  }
`;

const ImageSection = styled.section`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: opacity 1.5s ease;
  
  &.hidden {
    opacity: 0;
  }

  &.visible {
    opacity: 1;
  }
`;

const Controls = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;

  button {
    width: 50px;
    height: 50px;
    background: #ddb892;
    border: none;
    border-radius: 8px;
    color: #4a3a29;
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease;

    &:hover {
      background: #b7946e;
    }
  }
`;

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showNewImage, setShowNewImage] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [
    { old: '/OldPictureCafe2.jpg', new: '/NewPictureCafe.png' },
    { old: '/OldPictureCafe3.jpg', new: '/NewPictureCafe2.png' },
  ];

  // References for timeouts and transitions
  const transitionTimeoutRef = useRef(null);
  const cycleTimeoutRef = useRef(null);

  useEffect(() => {
    // Prevent automatic transitions during a manual change
    if (isTransitioning) return;

    // Transition from old to new after 3 seconds
    transitionTimeoutRef.current = setTimeout(() => {
      setShowNewImage(true);
      setIsTransitioning(true); // Mark as transitioning
    }, 3000);

    // Automatically switch to the next set after 10 seconds
    cycleTimeoutRef.current = setTimeout(() => {
      handleNext();
    }, 10000);

    // Cleanup timeouts on unmount or when the component updates
    return () => {
      clearTimeout(transitionTimeoutRef.current);
      clearTimeout(cycleTimeoutRef.current);
    };
  }, [currentImageIndex, isTransitioning]);

  const handleNext = () => {
    setIsTransitioning(false); // Allow new transitions
    setShowNewImage(false); // Start by showing the old image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIsTransitioning(false); // Allow new transitions
    setShowNewImage(false); // Start by showing the old image
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <PageWrapper>
      <Menu />
      <MainContent>
        <TextSection>
          <h1>Welcome to Our Cafe</h1>
          <DecorativeLine />
          <p>Discover the best coffee, pastries, and cozy vibes.</p>
          <p>We offer a delightful experience for all coffee lovers!</p>
          <DecorativeLine />
          <OpeningHours>
            <p>Opening hours this winter:</p>
            <li>Monday-Friday: 9-17</li>
            <li>Saturday: 10-17</li>
            <li>Sunday: 10-16</li>
          </OpeningHours>
        </TextSection>
        <ImageSection>
          <ImageWrapper>
            <Image
              src={images[currentImageIndex].old}
              alt={`Old Image ${currentImageIndex + 1}`}
              className={showNewImage ? 'hidden' : 'visible'}
            />
            <Image
              src={images[currentImageIndex].new}
              alt={`New Image ${currentImageIndex + 1}`}
              className={showNewImage ? 'visible' : 'hidden'}
            />
          </ImageWrapper>
          <Controls>
            <button onClick={handlePrev}>&#8249;</button>
            <button onClick={handleNext}>&#8250;</button>
          </Controls>
        </ImageSection>
      </MainContent>
    </PageWrapper>
  );
};

export default Home;
