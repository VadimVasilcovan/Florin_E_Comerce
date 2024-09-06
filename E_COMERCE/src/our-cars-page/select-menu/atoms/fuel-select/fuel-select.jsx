import React, { useState, useEffect } from "react";
import './fuel-select.css';

function SelectFuel({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [fuels, setFuels] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueFuels = [...new Set(cars.map(car => car.fuel))];
            setFuels(uniqueFuels);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="fuel-container">
            <select className="select-element-fuel" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Fuel
                </option>
                {fuels.length > 0 ? (
                    fuels.map((fuel, index) => (
                        <option key={index} value={fuel}>
                            {fuel}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No fuels available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectFuel;
