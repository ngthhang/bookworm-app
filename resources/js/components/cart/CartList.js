import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { Empty } from 'antd';
import { connect } from 'react-redux';

function CartList(props) {
  const { cartList } = props;

  useEffect(() => {}, [cartList]);

  return (
    <div>
      {cartList.length > 0 ? (
        cartList.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <Empty />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartList: state.cart.cartList
});

export default connect(mapStateToProps)(CartList);
