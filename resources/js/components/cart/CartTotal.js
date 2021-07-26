import React, { useEffect, useState } from 'react';
import { Card, Button, notification } from 'antd';
import { connect } from 'react-redux';
import { formatNum, getTotalPriceItems } from '../../utils';
import { getAllIdBooks } from '../../services/book.service';
import { placeOrderBooks } from '../../services/order.service';
import { deleteFromCart, deleteAll } from '../../actions/';
import { Redirect } from 'react-router-dom';

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

function CartTotal({ cart, dispatch }) {
  const { cartList } = cart;
  const [redirect, enableRedirect] = useState(false);

  const showNotification = (type, title, message) => {
    notification[type]({
      placement: 'bottomRight',
      message: title,
      description: message,
      duration: 3
    });
  };

  const placeOrder = async () => {
    if (cartList && cartList.length === 0) {
      showNotification(
        'error',
        'Cart has no books to order',
        'Please view books you want and add to cart'
      );
      return;
    }

    const res = await getAllIdBooks();
    const { data } = res;
    let dataIdArr = [];
    let booksIdNotExist = [];
    let booksIdExist = [];
    let booksNameNotExist = [];
    data.map((item) => dataIdArr.push(item.id));
    cartList.map((item) => {
      if (!dataIdArr.includes(parseInt(item.id))) {
        booksIdNotExist.push(item.id);
        booksNameNotExist.push(item.book_title);
      } else {
        booksIdExist.push({
          book_id: item.id,
          quantity: item.quantity,
          final_price:
            item.discount_price === null ? item.book_price : item.discount_price
        });
      }
    });

    if (booksIdNotExist.length > 0) {
      showNotification(
        'error',
        'Some books do not exist',
        `${booksNameNotExist.join(' & ')} will be removed automatically`
      );
      booksIdNotExist.map((item) => dispatch(deleteFromCart(item)));
      return;
    }

    const dataToPlaceOrder = {
      order_amount: calculateTotalPrice(cartList),
      order_list_item: booksIdExist
    };

    const resPlaceOrder = await placeOrderBooks(dataToPlaceOrder);
    const { status } = resPlaceOrder;
    dispatch(deleteAll());
    if (status === 201) {
      enableRedirect(true);
    }
  };

  useEffect(() => {}, [cart]);

  if (redirect) {
    return <Redirect to="/success-order" />;
  }

  return (
    <Card title="Cart Totals" style={{ width: '100%' }} className="text-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>${calculateTotalPrice(cartList)}</h1>
        <Button
          type="primary"
          danger
          onClick={placeOrder}
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
