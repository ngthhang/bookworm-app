import React, { useState } from 'react';
import { Result, Button } from 'antd';
import { Redirect } from 'react-router-dom';

export default function PageStatus404() {
  const [redirect, enableRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Result
      status="404"
      title="404"
      className="home-page"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => enableRedirect(true)}>
          Back Home Page
        </Button>
      }
    />
  );
}
