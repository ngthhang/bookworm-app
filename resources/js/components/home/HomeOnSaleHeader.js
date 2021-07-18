import React, { useState } from 'react';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

export default function HomeOnSaleHeader() {
  const [isRedirect, enableRedirect] = useState(false);

  if (isRedirect) {
    return <Redirect to="/shop" />;
  }

  return (
    <div className="w-100 px-2 mb-3 d-flex flex-row align-items-center justify-content-between">
      <h3>On Sale</h3>
      <Button
        icon={<CaretRightOutlined />}
        className="d-flex align-items-center"
        onClick={() => enableRedirect(true)}
        type="primary"
        size="large"
        shape="round"
        style={{ backgroundColor: '#32325d', borderColor: '#32325d' }}
      >
        View All
      </Button>
    </div>
  );
}
