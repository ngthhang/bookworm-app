import React from 'react';
import { Row, Col } from 'antd';
import {
  ProductInfo,
  ProductPrice,
  ProductRating,
  ProductReviewForm
} from '../components/product';

function Product(props) {
  return (
    <div className="mx-5 my-5 pb-5" style={{ minHeight: 1500 }}>
      <h4>Category Name</h4>
      <hr />
      <Row gutter={[16, 32]} type="flex">
        <Col span={24} sm={24} md={24} xl={17} lg={17}>
          <ProductInfo />
        </Col>
        <Col span={24} sm={24} md={24} xl={7} lg={7}>
          <ProductPrice />
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

export default Product;
