import React, { useState, useEffect } from "react";
import './mileage-select.css';

function SelectMileage({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [mileages, setMileages] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueMileages = [...new Set(cars.map(car => car.mileage))];
            setMileages(uniqueMileages);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="mileage-container">
            <select className="select-element-mileage" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Mileage
                </option>
                {mileages.length > 0 ? (
                    mileages.map((mileage, index) => (
                        <option key={index} value={mileage}>
                            {mileage}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No mileage available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectMileage;
