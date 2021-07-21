import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function CartHeader({ cart }) {
  const { totalCart } = cart;
  useEffect(() => {}, [cart]);
  return (
    <div>
      <h3>Your cart ({totalCart} items)</h3>
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(CartHeader);
