import React, { useState } from "react";
import { Button } from "antd";
import { Redirect } from 'react-router-dom';

export default function HomeFeatureBooksHeader() {
  const [isRedirect, enableRedirect] = useState(false);

  if (isRedirect) {
    return <Redirect to='/shop' />
  }

  return (
    <div className="w-100 px-2 pt-5 d-flex flex-column align-items-center justify-content-center">
      <h3>Featured Books</h3>
      <div className="d-flex flex-row align-items-center justify-content-center pt-2">
        <Button
          className="d-flex align-items-center mr-5"
          onClick={() => enableRedirect(true)}
          type="primary"
          size="large"
          // shape='round'
          style={{ backgroundColor: "#32325d", borderColor: "#32325d" }}
        >
          Recommended
        </Button>
        <Button
          className="d-flex align-items-center"
          onClick={() => enableRedirect(true)}
          type="primary"
          size="large"
          // shape='round'
          style={{ backgroundColor: "#32325d", borderColor: "#32325d" }}
        >
          Popular
        </Button>
      </div>
    </div>
  );
}
