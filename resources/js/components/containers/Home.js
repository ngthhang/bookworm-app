import React from 'react';
import HomeOnSale from '../home/HomeOnSale';
import HomeFeatureBooks from '../home/HomeFeatureBooks';

function Home() {
  return (
    <div className="home-page">
      <HomeOnSale />
      <HomeFeatureBooks />
    </div>
  );
}

export default Home;