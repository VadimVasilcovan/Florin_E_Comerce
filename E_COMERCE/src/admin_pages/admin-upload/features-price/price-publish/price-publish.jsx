import React, { useState, useEffect } from "react";
import "./price-publish.css";

function PriceAndPublish({ setPrice, price, onPublish }) {
  const [inputValue, setInputValue] = useState(price || "");

  useEffect(() => {
    setPrice(inputValue);
  }, [inputValue, setPrice]);

  const handlePublish = () => {
    onPublish();
  };

  return (
    <div className="secondary-features-div">
      <h1>5: Price and Publish</h1>
      <hr />
      <div className="price-div">
        
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setPrice(e.target.value);
          }}
          placeholder="Enter price"
        />
        <label>Price</label>
      </div>
      <div className="publish-div">
        <button className="publish-btn" onClick={handlePublish}>
          Publish
        </button>
      </div>
    </div>
  );
}

export default PriceAndPublish;
