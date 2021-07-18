import React from 'react';
import { Row, Col, Card, Button } from 'antd';

const bodyCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  alignItems: 'flex-start',
  justifyContent: 'center'
};

const cardStyle = {
  width: '100%',
  height: '100%'
};

export default function ShopFilter() {
  return (
    <Row type="flex" gutter={[8, 16]} className="pb-4">
      <Col span={24}>
        <span>Filter By</span>
      </Col>
      <Col span={24} sm={8} md={8} xl={24} lg={24}>
        <Card
          size="small"
          title="Category"
          bodyStyle={bodyCardStyle}
          style={cardStyle}
        >
          <Button type="link">Author name</Button>
          <Button type="link">Author name 2</Button>
          <Button type="link">3 Star</Button>
          <Button type="link">4 Star</Button>
          <Button type="link">5 Star</Button>
        </Card>
      </Col>
      <Col span={12} sm={8} md={8} xl={24} lg={24}>
        <Card
          size="small"
          title="Author"
          bodyStyle={bodyCardStyle}
          style={cardStyle}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={12} sm={8} md={8} xl={24} lg={24}>
        <Card
          size="small"
          title="Rating Review"
          bodyStyle={bodyCardStyle}
          style={cardStyle}
        >
          <Button type="link">1 Star</Button>
          <Button type="link">2 Star</Button>
          <Button type="link">3 Star</Button>
          <Button type="link">4 Star</Button>
          <Button type="link">5 Star</Button>
        </Card>
      </Col>
    </Row>
  );
}
