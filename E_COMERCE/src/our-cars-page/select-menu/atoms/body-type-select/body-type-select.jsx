import React, { useState, useEffect } from "react";
import './body-type-select.css';

function SelectBodyType({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [bodyTypes, setBodyTypes] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueBodyTypes = [...new Set(cars.map(car => car.bodyType))];
            setBodyTypes(uniqueBodyTypes);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="body-type-container">
            <select className="select-element-body-type" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Body Type
                </option>
                {bodyTypes.length > 0 ? (
                    bodyTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No body types available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectBodyType;
