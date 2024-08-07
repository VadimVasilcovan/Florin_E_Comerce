import React, { useState } from "react";
import "./price-publish.css";

function PriceAndPublish() {
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
                    <button className="add-button" onClick={handleButtonClick}>+</button>
                </div>
                <div className="additional-info">
                    {values.map((value, index) => (
                        <p className="additional-info-p" key={index}>
                            {value}€
                            <button className="additional-info-delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                        </p>
                    ))}
                </div>
            </div>
            <div className="admin-publish-div">
                <h1>5: Publish</h1>
                <hr />
                <div className="publish-buttons-div">
                    <button>Publish vehicles</button>
                    <button>Discard changes</button>
                </div>
            </div>
        </div>
    );
}

export default PriceAndPublish;
