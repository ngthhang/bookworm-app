import React, { useEffect } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'react-redux';
import { formatNum, getTotalPriceItems } from '../../utils';

const calculateTotalPrice = (list) => {
  let result = 0;
  list.map((item) => {
    result += getTotalPriceItems(
      item.book_price,
      item.discount_price,
      item.quantity
    );
  });
  return formatNum(result);
};

function CartTotal({ cart }) {
  const { cartList } = cart;

  useEffect(() => {}, [cart]);
  return (
    <Card title="Cart Totals" style={{ width: '100%' }} className="text-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>${calculateTotalPrice(cartList)}</h1>
        <Button
          type="primary"
          danger
          size="large"
          style={{ width: 150 }}
          className="d-flex align-items-center justify-content-center"
        >
          Place order
        </Button>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(CartTotal);
