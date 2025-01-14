import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Menu2 from './pages/Menu2';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the wrapper takes at least the full height of the viewport */
  min-width: 315px; /* Prevent the site from shrinking below 300px */
`;

const MainContent = styled.main`
  flex: 1; /* Pushes the footer to the bottom if content is shorter than the viewport */
`;

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu2" element={<Menu2 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainContent>
      <Footer />
    </PageWrapper>
  );
};

export default App;
