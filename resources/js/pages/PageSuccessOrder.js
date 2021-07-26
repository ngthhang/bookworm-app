import React, { useState } from 'react';
import { Result, Button } from 'antd';
import { Redirect } from 'react-router-dom';

export default function PageSuccessOrder() {
  const [redirect, enableRedirect] = useState(false);

  setTimeout(() => {
    enableRedirect(true);
  }, 10000);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Result
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ height: '70vh' }}
      status="success"
      style={{ margin: '100px 0px 0px 50px' }}
      title="Successfully Ordered books"
      subTitle="Please wait for 3-4 days to receive the goods, thank you for purchase books in our website. If you have any questions, please call the hotline: (+84) 27 2707 2021"
      extra={
        <Button type="primary" onClick={() => enableRedirect(true)}>
          Go back Home page
        </Button>
      }
    />
  );
}
