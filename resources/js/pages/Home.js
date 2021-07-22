import React from 'react';
import { AppBackTop } from '../components/general';
import { HomeOnSale, HomeFeatureBooks } from '../components/home';

function Home() {
  return (
    <div className="home-page">
      <HomeOnSale />
      <HomeFeatureBooks />
      <AppBackTop />
    </div>
  );
}

export default Home;
