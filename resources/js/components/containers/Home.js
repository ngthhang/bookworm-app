import React from 'react';
import HomeOnSale from '../home/HomeOnSale';
import HomeFeatureBooks from '../home/HomeFeatureBooks';

function Home() {
  return (
    <div className="mt-5 mx-4">
      <HomeOnSale />
      <HomeFeatureBooks />
    </div>
  );
}

export default Home;