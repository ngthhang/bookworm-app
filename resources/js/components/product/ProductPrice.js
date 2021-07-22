import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, Button } from 'antd';
import { connect } from 'react-redux';
import { PriceTag } from '../general';
import { Redirect } from 'react-router-dom';
import { addToCart } from '../../actions';
import QuantityAdjustBtnGroup from '../general/QuantityAdjustBtnGroup';

const { Title } = Typography;

const btnStyle = {
  width: '100%',
  backgroundColor: '#1f2750',
  borderColor: '#1f2750',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const btnStyleDisabled = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function ProductPrice(props) {
  const { discounts, book_price, cart, id } = props;
  const { cartList } = cart;
  const [quantity, setQuantity] = useState(1);
  const [redirect, enableRedirect] = useState(false);
  let discountPrice = null;
  let isItemInCart = false;
  if (discounts.length > 0) {
    discountPrice = discounts[0].discount_price;
  }

  cartList.map((item) => {
    if (item.id === id) {
      isItemInCart = true;
      return;
    }
  });

  const addQuantity = () => {
    if (quantity < 8) {
      setQuantity(quantity + 1);
    }
  };

  const minusQuantity = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItemToCart = () => {
    const { id, book_title, book_price, author, dispatch, book_cover_photo } =
      props;
    const { author_name } = author;
    const item = {
      id: id,
      book_title: book_title,
      book_price: book_price,
      author_name: author_name,
      discount_price: discountPrice,
      book_cover_photo: book_cover_photo,
      quantity: quantity
    };
    dispatch(addToCart(item));
    enableRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/cart" />;
  }

  return (
    <Card
      title={<PriceTag bookPrice={book_price} discountPrice={discountPrice} />}
      style={{ width: '100%' }}
    >
      <div className="d-flex flex-column align-items-start justify-content-center">
        <Title level={5}>Quantity: </Title>
        <QuantityAdjustBtnGroup
          plusQuantityFunc={addQuantity}
          minusQuantityFunc={minusQuantity}
          quantity={quantity}
          disabled={isItemInCart}
          className="my-3"
        />
        <Row className="w-100" align="center">
          <Col span={24} sm={16} md={10} xl={24} lg={24}>
            <Button
              onClick={() => addItemToCart()}
              type="primary"
              size="large"
              disabled={isItemInCart}
              style={!isItemInCart ? btnStyle : btnStyleDisabled}
            >
              {isItemInCart ? 'Added to cart' : 'Add to cart'}
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
});

export default connect(mapStateToProps)(ProductPrice);
