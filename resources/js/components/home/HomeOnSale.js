import React, {Component} from 'react';
import HomeOnSaleHeader from './HomeOnSaleHeader';
import HomeOnSaleCarousel from './HomeOnSaleCarousel';

export default class HomeOnSale extends Component{
  render() {
    return (
      <div>
        <HomeOnSaleHeader />
        <HomeOnSaleCarousel />
      </div>
    )
  }
};
