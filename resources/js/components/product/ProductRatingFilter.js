import React from 'react';
import { Row, Col, Select, Space, Rate, Typography, Divider } from 'antd';

const { Option } = Select;
const { Title, Text, Link } = Typography;

export default function ProductRatingFilter() {
  return (
    <Row gutter={[8, 16]}>
      <Col
        span={24}
        sm={24}
        md={14}
        xl={12}
        lg={14}
        className="d-flex flex-row align-items-center justify-content-start"
      >
        <Title level={4} className="m-0 mr-2">
          Customer Reviews
        </Title>
        <Title level={5} type="secondary" className="m-0">
          (Filtered by <Text code>5 star</Text>)
        </Title>
      </Col>
      <Col
        span={24}
        className="d-flex flex-row align-items-center justify-content-start"
      >
        <Title level={4} className="m-0 mr-2">
          4.6 Star
        </Title>
        <Rate allowHalf defaultValue={2.6} disabled={true} />
      </Col>
      <Col span={24}>
        <Space split={<Divider type="vertical" />} wrap>
          <Link underline>(3.124)</Link>
          <Link underline>5 star (200)</Link>
          <Link underline>4 star (100)</Link>
          <Link underline>3 star (40)</Link>
          <Link underline>2 star (29)</Link>
          <Link underline>1 star (5)</Link>
        </Space>
      </Col>
      <Col span={24} sm={24} md={10} xl={14} lg={9}>
        <span>Showing 1 - 12 of 123 books</span>
      </Col>
      <Col span={24} sm={24} md={14} xl={10} lg={15}>
        <Row
          gutter={[8, 16]}
          className="d-flex align-items-center justify-content-end"
        >
          <Col span={24} sm={17} md={17} xl={17} lg={17}>
            <Select defaultValue="newest" style={{ width: '100%' }}>
              <Option value="newest">Sort by date: newest to oldest</Option>
              <Option value="oldest">Sort by date: oldest to newest</Option>
            </Select>
          </Col>
          <Col span={24} sm={7} md={7} xl={7} lg={7}>
            <Select defaultValue="20" style={{ width: '100%' }}>
              <Option value="20">Show 20</Option>
              <Option value="15">Show 15</Option>
              <Option value="5">Show 5</Option>
              <Option value="30">Show 30</Option>
            </Select>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
