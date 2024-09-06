import React, { useState, useEffect } from "react";
import './model-select.css';

function SelectModel({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [models, setModels] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueModels = [...new Set(cars.map(car => car.carModel))];
            setModels(uniqueModels);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="model-container">
            <select className="select-element-model" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Model
                </option>
                {models.length > 0 ? (
                    models.map((model, index) => (
                        <option key={index} value={model}>
                            {model}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No models available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectModel;
