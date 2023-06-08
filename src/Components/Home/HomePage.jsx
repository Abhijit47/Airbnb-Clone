import React from 'react';
import Calender from '../Calendar/Calendar';
import Feature from '../Features/FeatureCard';
import Header from '../Header/Header';
import Price from '../Price/PriceCard';

const HomePage = () => {
  return (
    <>
      <Calender />
      <Header />
      <Feature />
      <Price />
    </>
  );
};

export default HomePage;