import React from 'react';
import { Row, Col, Select, Pagination } from 'antd';
import CardBook from '../general/CardBook';

const { Option } = Select;

const children = [];
// for (let i = 0; i < 31; i++) {
//   children.push(
//     <Col key={i} span={24} sm={12} md={8} xl={6} lg={6}>
//       <CardBook />
//     </Col>
//   );
// }

export default function ShopFilter() {
  return (
    <Row gutter={[8, 16]}>
      <Col span={24} sm={24} md={12} xl={12} lg={12}>
        <span>Showing 1 - 12 of 123 books</span>
      </Col>
      <Col span={24} sm={24} md={12} xl={12} lg={12}>
        <Row
          gutter={[8, 0]}
          className="d-flex align-items-center justify-content-end"
        >
          <Col span={14} sm={14} md={14} xl={10} lg={11}>
            <Select defaultValue="sale" style={{ width: '100%' }}>
              <Option value="sale">Sort by on sale</Option>
              <Option value="popularity">Sort by popularity</Option>
              <Option value="lowToHigh">Sort by low to high</Option>
              <Option value="highToLow">Sort by high to low</Option>
            </Select>
          </Col>
          <Col span={10} sm={10} md={10} xl={6} lg={7}>
            <Select defaultValue="20" style={{ width: '100%' }}>
              <Option value="20">Show 20</Option>
              <Option value="15">Show 15</Option>
              <Option value="5">Show 5</Option>
              <Option value="30">Show 30</Option>
            </Select>
          </Col>
        </Row>
      </Col>
      <Col span={24} style={{ minHeight: '100%' }}>
        <Row gutter={[24, 32]}>{children}</Row>
      </Col>
      <Col
        span={24}
        className="d-flex align-items-center justify-content-center mt-3 mb-5 pb-5"
      >
        <Pagination
          showSizeChanger={false}
          // onShowSizeChange={onShowSizeChange}
          defaultCurrent={3}
          total={500}
        />
      </Col>
    </Row>
  );
}
