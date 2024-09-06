import React, { useState, useEffect } from "react";
import "./interior-and-comfort.css";

function InteriorAndComfort({ setInteriorFeatures }) {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      setValues([...values, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (indexToDelete) => {
    setValues(values.filter((_, index) => index !== indexToDelete));
  };

  useEffect(() => {
    setInteriorFeatures(values);
  }, [values, setInteriorFeatures]);

    return (
        <div className="main-features-div">
            <div className="secondary-features-div">
                <span>Interior & comfort</span>
                <div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="add-button" onClick={handleButtonClick}>+</button>
                </div>
                <div className="additional-info">
                    {values.map((value, index) => (
                        <p className="additional-info-p" key={index}>
                            {value}
                            <button className="additional-info-delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InteriorAndComfort;
