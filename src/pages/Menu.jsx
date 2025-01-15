import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import menuData from '../data/menu.json';
import Social from '../components/Socials';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  background: #fdf6e3;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px; /* Spacing between TextSection and Social */
  max-width: 1200px;
  margin: 0 auto 50px;
  padding: 30px;
  padding-top: 250px; /* Keeps the overall layout positioning */

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 80px;
  }
`;

const TextSection = styled.section`
  flex: 2; /* Makes TextSection take 2/3 of the space */
  background: #fdf6e3;
  border-radius: 12px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 30px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: #6b4e3d;
    font-family: 'Georgia', serif;
  }

  .divider {
    width: 80px;
    height: 4px;
    background: #d4a373;
    margin: 10px auto 20px;
    border-radius: 2px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.75;
    color: #4a3a29;
    margin: 0 auto;
    font-family: 'Arial', sans-serif;
  }
`;

const SocialWrapper = styled.div`
  flex: 1; /* Makes Social take 1/3 of the space */
  align-self: center; /* Aligns it properly with the TextSection */
`;

const ImageGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 20px;
  background: rgba(240, 230, 210, 0.9); 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    grid-column: 1 / -1; /* Span the title across the grid */
    font-size: 1.8rem;
    text-align: center;
    color: #6b4e3d;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px); 
    }

    img {
      border-radius: 8px;
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height: 300px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, filter 0.3s ease;

      &:hover {
        transform: scale(1.05); 
        filter: brightness(1.1); 
      }
    }

    h3 {
      margin: 10px 0;
      font-size: 1.2rem;
      color: #6b4e3d;
    }

    p {
      font-size: 0.95rem;
      color: #4a3a29;
      margin: 5px 0;
    }
  }
`;

const MenuPage = () => {
  return (
    <PageWrapper>
      <Menu />
      <ContentWrapper>
        <TextSection>
          <h1>Welcome to Our Menu</h1>
          <div className="divider"></div>
          <p>
            At Le Pomme, we pride ourselves on offering an exquisite selection of French pastry classics, 
            paired with locally sourced Norwegian ingredients. 
          </p>
          <p>
            Whether you're in the mood for something sweet or savory, our menu includes a variety of treats 
            crafted to satisfy every palate. Don’t forget to ask about our gluten-free and vegetarian options!
          </p>
        </TextSection>
        <SocialWrapper>
          <Social />
        </SocialWrapper>
      </ContentWrapper>
      <ImageGrid>
        <h2>Explore Our Treats</h2>
        {menuData.map((item) => (
          <div key={item.id}>
            <img src={`/src/assets/images/${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </ImageGrid>
    </PageWrapper>
  );
};

export default MenuPage;
