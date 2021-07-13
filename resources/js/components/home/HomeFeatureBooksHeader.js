import React, { useState } from "react";
import { Button } from "antd";

export default function HomeFeatureBooksHeader() {
  const [isRecommended, toggleButtonRecommended] = useState(true);

  const btnStyleActive = {
    backgroundColor: "#32325d",  
    borderColor: "#32325d",
    color: "#f0f0f0",
  }
  
  const btnStyleDisabled = {
    backgroundColor: "#f0f0f0",
    borderColor: "#f0f0f0",
    color: "#32325d",
  }

  return (
    <div className="w-100 px-2 pt-5 d-flex flex-column align-items-center justify-content-center">
      <h3>Featured Books</h3>
      <div className="w-50 d-flex flex-row align-items-center justify-content-center pt-2">
        <Button
          className="d-flex align-items-center mr-3"
          onClick={() => toggleButtonRecommended(true)}
          type="primary"
          size="large"
          style = {isRecommended ? btnStyleActive : btnStyleDisabled}
        >
          Recommended
        </Button>
        <Button
          className="d-flex align-items-center ml-3"
          onClick={() => toggleButtonRecommended(false)}
          type="primary"
          size="large"
          style={!isRecommended ? btnStyleActive : btnStyleDisabled}
        >
          Popular
        </Button>
      </div>
    </div>
    );
}
