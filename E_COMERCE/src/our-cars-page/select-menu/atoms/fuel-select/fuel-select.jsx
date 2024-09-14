import React, { useState, useEffect, useRef } from "react";
import './fuel-select.css';

const predefinedFuelOptions = [
    { label: 'All Fuels', value: null },
    { label: 'Petrol', value: 'Petrol' },
    { label: 'Diesel', value: 'Diesel' },
    { label: 'Electric', value: 'Electric' },
    { label: 'Hybrid', value: 'Hybrid' },
];

function SelectFuel({ selected, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Fuel');
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (!selected) {
            setSelectedOption('Fuel');
        } else {
            const selectedFuel = predefinedFuelOptions.find(fuel => fuel.value === selected);
            setSelectedOption(selectedFuel ? selectedFuel.label : 'Fuel');
        }
    }, [selected]);

    const handleOptionClick = (label, value) => {
        setSelectedOption(label);
        setIsOpen(false);
        onChange(value);
    };

    return (
        <div className="fuel-container" ref={containerRef}>
            <div className="select-element-fuel" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <div className="dropdown-fuel-menu">
                    {predefinedFuelOptions.map((fuel, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(fuel.label, fuel.value)}
                        >
                            {fuel.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SelectFuel;
