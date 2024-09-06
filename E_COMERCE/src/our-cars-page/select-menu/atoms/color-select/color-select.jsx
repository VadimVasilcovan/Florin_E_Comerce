import React, { useState, useEffect } from "react";
import './color-select.css';

function SelectColor({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [colors, setColors] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueColors = [...new Set(cars.map(car => car.bodyColor))];
            setColors(uniqueColors);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="color-container">
            <select className="select-element-color" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Color
                </option>
                {colors.length > 0 ? (
                    colors.map((color, index) => (
                        <option key={index} value={color}>
                            {color}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No colors available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectColor;
