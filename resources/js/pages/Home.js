import React from 'react';
import { HomeOnSale, HomeFeatureBooks } from '../components/home';

function Home() {
  return (
    <div className="home-page">
      <HomeOnSale />
      <HomeFeatureBooks />
    </div>
  );
}

export default Home;
