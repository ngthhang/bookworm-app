import React from 'react';
import { Card, Button, Typography, InputNumber, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { PriceTag } from '../general';

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

function ProductPrice() {
  return (
    <Card
      title={<PriceTag normalPrice={1200} discountPrice={200} />}
      style={{ width: '100%' }}
    >
      <div className="d-flex flex-column align-items-start justify-content-center">
        <Title level={5}>Quantity: </Title>
        <Row className="w-100 py-3" align="center">
          <Col span={2} sm={2} md={2} xl={4} lg={4}>
            <Button
              type="primary"
              style={btnStyle}
              icon={<MinusOutlined />}
            ></Button>
          </Col>
          <Col
            span={16}
            sm={12}
            md={6}
            xl={16}
            lg={16}
            className="d-flex align-items-center justify-content-center"
          >
            <Title level={5}>3</Title>
          </Col>
          <Col span={2} sm={2} md={2} xl={4} lg={4}>
            <Button
              type="primary"
              style={btnStyle}
              icon={<PlusOutlined />}
            ></Button>
          </Col>
        </Row>
        <Row className="w-100" align="center">
          <Col span={20} sm={16} md={10} xl={24} lg={24}>
            <Button type="primary" size="large" style={btnStyle}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default ProductPrice;
