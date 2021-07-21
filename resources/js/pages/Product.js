import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Result } from 'antd';
import { Redirect } from 'react-router-dom';
import {
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductReviewForm
} from '../components/product';
import { getBookById } from '../services/book.service';

function Product(props) {
  const { id } = props;
  const [error, changeError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [redirect, enableRedirect] = useState(false);
  const [data, setData] = useState(null);

  useEffect(async () => {
    setLoading(true);
    const res = await getBookById(id);
    if (res.status === 404) {
      changeError(true);
    } else {
      setData(res.data);
    }
    setLoading(false);
  }, [id]);

  if (redirect) {
    return <Redirect to="/" />;
  }

  if (error) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the product you found does not exist."
        extra={
          <Button type="primary" onClick={() => enableRedirect(true)}>
            Back Home
          </Button>
        }
      />
    );
  }

  if (!loading) {
    console.log(data);
    const { author, discounts, reviews, category, book_price } = data;
    const { category_name } = category;

    return (
      <div className="mx-5 my-5 pb-5" style={{ minHeight: 1500 }}>
        <h4>{category_name}</h4>
        <hr />
        <Row gutter={[16, 32]} type="flex">
          <Col span={24} sm={24} md={24} xl={17} lg={17}>
            <ProductInfo {...data} />
          </Col>
          <Col span={24} sm={24} md={24} xl={7} lg={7}>
            <ProductPrice {...data} />
          </Col>
          <Col span={24} sm={24} md={24} xl={17} lg={17}>
            <ProductRating />
          </Col>
          <Col span={24} sm={24} md={24} xl={7} lg={7}>
            <ProductReviewForm />
          </Col>
        </Row>
      </div>
    );
  }
  return null;
}

export default Product;
