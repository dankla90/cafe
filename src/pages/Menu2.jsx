import React, { useEffect, useState } from 'react';
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
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

const TextSection = styled.section`
  width: 48%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    color: #6b4e3d;
    margin-bottom: 20px;
    font-family: 'Georgia', serif;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.75;
    color: #4a3a29;
    margin-bottom: 15px;
  }



    @media (max-width: 768px) {
      width: 98%;
      min-width: 300px;
  }
`;

const ImageSection = styled.section`
  width: 48%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding-top: 20px;

  img {
    border-radius: 8px;
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const MenuPage = () => {
  const [instagramImages, setInstagramImages] = useState([]);

  useEffect(() => {
    // Replace with your Instagram access token and API endpoint
    const fetchInstagramImages = async () => {
      try {
        const response = await fetch(
          'https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&access_token=YOUR_ACCESS_TOKEN'
        );
        const data = await response.json();
        if (data.data) {
          setInstagramImages(data.data); 
        }
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
      }
    };

    fetchInstagramImages();
  }, []); 

  return (
    <PageWrapper>
      <Menu />
      <MainContent>
        <TextSection>
          <h1>Discover Our Menu</h1>
          <p>
            At Le Pomme, we take pride in offering a diverse selection of French pastry classics,
            expertly paired with local Norwegian ingredients. Our menu features both sweet and savory
            options to delight your taste buds.
          </p>
          <p>
            From flaky croissants and rich chocolate éclairs to hearty quiches and artisan sandwiches, we
            have something for everyone. And don’t forget to try our specialty coffees, teas, and
            refreshing juices, crafted to perfection.
          </p>
          <p>
            We also cater to dietary preferences with a variety of vegetarian and gluten-free treats. Come
            and experience the magic of Le Pomme!
          </p>
          <Social />
        </TextSection>
        <ImageSection>
          <p>This is where the instagram pictues would go</p>
          {instagramImages.map((image) => (
            <img
              key={image.id}
              src={image.media_url} // Use the media_url from the API
              alt={image.caption || 'Instagram Post'}
            />
          ))}
        </ImageSection>
      </MainContent>
    </PageWrapper>
  );
};

export default MenuPage;
