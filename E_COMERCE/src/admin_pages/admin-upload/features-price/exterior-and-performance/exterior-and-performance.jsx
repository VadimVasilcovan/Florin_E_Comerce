import React, { useState } from "react";
import "./exterior-and-performance.css";

function ExteriorAndPerformance() {
    const [inputValue, setInputValue] = useState("");
    const [values, setValues] = useState([]);

    const handleButtonClick = () => {
        if (inputValue.trim() !== "") {
            setValues([...values, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div className="main-features-div">
            <div className="secondary-features-div">   
            <h1>3: Features</h1>
            <hr />
            <span>Exterior & performance</span>
            <div >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="add-button" onClick={handleButtonClick}>+</button>
            </div>
            <div className="additional-info">
                {values.map((value, index) => (
                    <p className="additional-info-p" key={index}>{value}<button className="additional-info-delete-btn">Delete</button></p>
                ))}
                
            </div>
            </div>
        </div>
    );
}

export default ExteriorAndPerformance;