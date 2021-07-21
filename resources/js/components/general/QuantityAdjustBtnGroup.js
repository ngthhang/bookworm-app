import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
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

export default function QuantityAdjustBtnGroup(props) {
  const { minusQuantityFunc, plusQuantityFunc, className, quantity, disabled } =
    props;

  return (
    <Row className={`w-100 ${className}`} align="center">
      <Col span={3} sm={2} md={2} xl={4} lg={4}>
        <Button
          type="primary"
          style={!disabled ? btnStyle : btnStyleDisabled}
          onClick={minusQuantityFunc}
          icon={<MinusOutlined />}
          disabled={disabled}
        ></Button>
      </Col>
      <Col
        span={18}
        sm={12}
        md={6}
        xl={16}
        lg={16}
        className="d-flex align-items-center justify-content-center"
      >
        <Title level={5}>{disabled ? null : quantity}</Title>
      </Col>
      <Col span={3} sm={2} md={2} xl={4} lg={4}>
        <Button
          type="primary"
          style={!disabled ? btnStyle : btnStyleDisabled}
          icon={<PlusOutlined />}
          disabled={disabled}
          onClick={plusQuantityFunc}
        ></Button>
      </Col>
    </Row>
  );
}
