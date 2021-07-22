import React from 'react';
import { BackTop, Button } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';

export default function AppBackTop() {
  return (
    <BackTop visibilityHeight={700}>
      <Button
        type="primary"
        shape="circle"
        className="d-flex align-items-center justify-content-center"
        size="large"
      >
        <CaretUpOutlined />
      </Button>
    </BackTop>
  );
}
