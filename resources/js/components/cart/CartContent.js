import React from 'react';
import { Row, Col } from 'antd';
import CartList from './CartList';
import CartTotal from './CartTotal';

function CartContent() {
  return (
    <Row gutter={[40, 0]}>
      <Col span={24} sm={24} md={24} xl={17} lg={24} className="bg-white">
        <CartList />
      </Col>
      <Col span={24} sm={24} md={24} xl={7} lg={24}>
        <CartTotal />
      </Col>
    </Row>
  );
}

export default CartContent;
