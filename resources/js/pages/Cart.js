import React from 'react';
import { CartHeader, CartContent } from '../components/cart';
import { AppBackTop } from '../components/general';

function Cart() {
  return (
    <div className="home-page">
      <CartHeader />
      <CartContent />
      <AppBackTop />
    </div>
  );
}

export default Cart;
