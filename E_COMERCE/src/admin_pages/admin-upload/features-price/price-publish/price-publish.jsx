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
    <div className="price-and-publish-div">
      <h1>5: Price and Publish</h1>
      <hr />
      <div className="price-div">
        <label>Price</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setPrice(e.target.value);
          }}
          placeholder="Enter price"
        />
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
