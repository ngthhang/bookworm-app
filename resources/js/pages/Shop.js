import React from 'react';
import { Row, Col } from 'antd';
import { ShopFilter, ShopSearchResults } from '../components/shop';

function Shop() {
  return (
    <div className="mt-5 mx-5 mb-5 pb-5">
      <h4>Books</h4>
      <hr />
      <Row gutter={[16, 0]} type="flex">
        <Col span={24} sm={24} md={24} xl={4} lg={4}>
          <ShopFilter />
        </Col>
        <Col span={24} sm={24} md={24} xl={20} lg={20}>
          <ShopSearchResults />
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
