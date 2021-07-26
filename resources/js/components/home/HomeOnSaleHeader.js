import React, { useState } from 'react';
import { Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { setInit } from '../../actions/sortAction';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function HomeOnSaleHeader(props) {
  const [isRedirect, enableRedirect] = useState(false);
  const { dispatch } = props;

  if (isRedirect) {
    dispatch(setInit());
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

export default connect()(HomeOnSaleHeader);
