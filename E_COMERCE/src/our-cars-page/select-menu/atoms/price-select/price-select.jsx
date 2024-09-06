import React, { useState, useEffect } from "react";
import './price-select.css';

function SelectPrice({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniquePrices = [...new Set(cars.map(car => car.price))];
            setPrices(uniquePrices);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="price-container">
            <select className="select-element-price" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Price
                </option>
                {prices.length > 0 ? (
                    prices.map((price, index) => (
                        <option key={index} value={price}>
                            {price}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No prices available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectPrice;
