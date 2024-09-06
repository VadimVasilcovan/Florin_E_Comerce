import React, { useState, useEffect } from "react";
import './manufacturer-select.css'

function Manufacturer({ cars, onChange }) {
    const [value, setValue] = useState('default'); // default value for the placeholder
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        // Extract unique manufacturers when cars data changes
        if (cars && Array.isArray(cars)) {
            const uniqueManufacturers = [...new Set(cars.map(car => car.carManufacturer))];
            setManufacturers(uniqueManufacturers);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="manufacturer-container">
            <select className="select-element-manufacturer" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Manufacturer
                </option>
                {manufacturers.length > 0 ? (
                    manufacturers.map((manufacturer, index) => (
                        <option key={index} value={manufacturer}>
                            {manufacturer}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No manufacturers available
                    </option>
                )}
            </select>
            {/*<p>Selected option: {value !== 'default' ? value : 'No selection'}</p>*/}
        </div>
    );
}

export default Manufacturer;
