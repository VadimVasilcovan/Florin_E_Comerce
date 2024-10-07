import React, { useState, useEffect } from "react";
import "./interior-and-comfort.css";

function InteriorAndComfort({ setInteriorFeatures, interiorFeatures }) {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState(interiorFeatures || []);

  useEffect(() => {
    setInteriorFeatures(values);
  }, [values, setInteriorFeatures]);

  const handleAddFeature = () => {
    if (inputValue.trim() !== "") {
      setValues((prevValues) => [...prevValues, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveFeature = (index) => {
    setValues((prevValues) => prevValues.filter((_, i) => i !== index));
  };

  return (
    <div className="secondary-features-div">
      <h1>4: Interior and Comfort</h1>
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add feature"
      />
      <button className="add-button" onClick={handleAddFeature}>+</button>
      <span className="additional-info">
        {values.map((feature, index) => (
          <p className="additional-info-p" key={index}>
            {feature}
            <button  className="additional-info-delete-btn" onClick={() => handleRemoveFeature(index)}>Remove</button>
          </p>
        ))}
      </span>
    </div>
  );
}

export default InteriorAndComfort;
