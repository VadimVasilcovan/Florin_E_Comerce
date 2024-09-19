import React, { useState, useEffect } from "react";
import "./exterior-and-performance.css";

function ExteriorAndPerformance({ setExteriorFeatures, exteriorFeatures }) {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState(exteriorFeatures || []);

  useEffect(() => {
    setExteriorFeatures(values);
  }, [values, setExteriorFeatures]);

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
    <div className="exterior-and-performance-div">
      <h1>3: Exterior and Performance</h1>
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add feature"
      />
      <button onClick={handleAddFeature}>Add</button>
      <ul>
        {values.map((feature, index) => (
          <li key={index}>
            {feature}
            <button onClick={() => handleRemoveFeature(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExteriorAndPerformance;
