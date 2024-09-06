import React, { useState, useEffect } from "react";
import './production-year-select.css';

function SelectProductionYear({ cars, onChange }) {
    const [value, setValue] = useState('default');
    const [years, setYears] = useState([]);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueYears = [...new Set(cars.map(car => car.productionYear))];
            setYears(uniqueYears);
        }
    }, [cars]);

    const changeSelect = (event) => {
        setValue(event.target.value);
        onChange(event);
    };

    return (
        <div className="production-year-container">
            <select className="select-element-production-year" value={value} onChange={changeSelect}>
                <option value="default" disabled hidden>
                    Production Year
                </option>
                {years.length > 0 ? (
                    years.map((year, index) => (
                        <option key={index} value={year}>
                            {year}
                        </option>
                    ))
                ) : (
                    <option value="default" disabled>
                        No production years available
                    </option>
                )}
            </select>
        </div>
    );
}

export default SelectProductionYear;
