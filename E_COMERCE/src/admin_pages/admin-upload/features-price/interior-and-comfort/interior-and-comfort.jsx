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
    <div className="interior-and-comfort-div">
      <h1>4: Interior and Comfort</h1>
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

export default InteriorAndComfort;
