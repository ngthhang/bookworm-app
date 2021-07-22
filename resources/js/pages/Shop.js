import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { ShopFilter, ShopSearchResults, ShopHeader } from '../components/shop';
import { AppBackTop } from '../components/general';

function Shop() {
  return (
    <div className="mt-5 mx-5 mb-5 pb-5">
      <ShopHeader />
      <Row gutter={[16, 0]} type="flex">
        <Col span={24} sm={24} md={24} xl={5} lg={6}>
          <ShopFilter />
        </Col>
        <Col span={24} sm={24} md={24} xl={19} lg={18}>
          <ShopSearchResults />
        </Col>
        <AppBackTop />
      </Row>
    </div>
  );
}

export default Shop;
