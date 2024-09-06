import React, { useState } from "react";
import "./price-publish.css";

function PriceAndPublish({ setPrice, onPublish }) {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setPrice(inputValue);
    }
  };

  const handlePublishClick = () => {
    onPublish(); // Trigger the publish action
  };

  return (
    <div className="price-and-publish">
      <div className="admin-price-div">
        <h1>4: Price</h1>
        <hr />
        <div className="price-input-div">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add-button" onClick={handleButtonClick}>
            +
          </button>
        </div>
      </div>
      <div className="publish-button-div">
        <button className="publish-button" onClick={handlePublishClick}>
          Publish vehicle
        </button>
      </div>
    </div>
  );
}

export default PriceAndPublish;