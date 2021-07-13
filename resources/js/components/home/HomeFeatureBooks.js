import React, { Component } from 'react';
import HomeFeatureBooksHeader from './HomeFeatureBooksHeader';
import HomeFeatureBooksContent from './HomeFeatureBooksContent';
export default class HomeFeatureBooks extends Component {
  render() {
    return (
      <div>
        <HomeFeatureBooksHeader />
        <HomeFeatureBooksContent />
      </div>
    )
  }
};
