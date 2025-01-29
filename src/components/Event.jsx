import React from 'react';
import styled from 'styled-components';

const EventContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: rgba(255, 250, 240, 0.8);
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 2rem;
    color: #6b4e3d;
  }

  p {
    font-size: 1.2rem;
    color: #4a3a29;
    line-height: 1.8;
  }
  img {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
  a {
    display: inline-block;
    margin-top: 20px;
    padding: 40px 100px;
    background-color:rgb(215, 139, 89);
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.3s ease;

    &:hover {
      background-color: #145dbf;
    }
  }
`;

const EventComponent = () => {
  return (
    <EventContainer>
      <h3>Upcoming Event the 15th of February</h3>
      <p>And as the story goes when Martin Luther was asked what he would do if the world were to end tomorrow, he answered, “I would plant and apple tree today.”
      So Kaffe Klee and Le Cafe Pomme decided to plant our first apple tree together in form of a collaboration.</p>
      <img src="/EventImage.jpg" alt="This describes an event we are having the 15th of february." />
      <a href="https://www.kleekaffe.no/appleandleaf" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </EventContainer>
  );
};

export default EventComponent;
