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
      <h3>Upcoming Event</h3>
      <p>Join us this weekend for a special event featuring live music, coffee tastings, and more!</p>
      <img src={`${process.env.PUBLIC_URL}/EventImage.jpg`} alt="This describes an event we are havning etc...." />
      <a href="https://www.facebook.com/events/example" target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </EventContainer>
  );
};

export default EventComponent;
