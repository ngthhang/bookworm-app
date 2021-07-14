import React from 'react';
import { Card, Button } from 'antd';

function CartTotal() {
  return (
    <Card title="Cart Totals" style={{ width: '100%' }} className="text-center">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>$19.08</h1>
        <Button
          type="primary"
          danger
          size="large"
          style={{ width: 150 }}
          className="d-flex align-items-center justify-content-center"
        >
          Place order
        </Button>
      </div>
    </Card>
  );
}

export default CartTotal;
