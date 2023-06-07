import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import FeatureCard from './Components/Features/FeatureCard';
import PriceCard from './Components/Price/PriceCard';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FeatureCard />
      <PriceCard />
    </>
  );
};

export default App;