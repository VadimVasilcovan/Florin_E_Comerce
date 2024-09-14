import React, { useState, useEffect, useRef } from "react";
import './mileage-select.css';

const predefinedMileageRanges = [
    { label: 'All Mileages', min: null, max: null },
    { label: '0 - 10,000 miles', min: 0, max: 10000 },
    { label: '10,001 - 20,000 miles', min: 10001, max: 20000 },
    { label: '20,001 - 30,000 miles', min: 20001, max: 30000 },
    { label: '30,001 - 40,000 miles', min: 30001, max: 40000 },
    { label: '40,001 - 50,000 miles', min: 40001, max: 50000 },
    { label: 'Above 50,000 miles', min: 50001, max: null },
];

function SelectMileage({ selected, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Mileage');
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');
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
        if (!selected || (selected.min === null && selected.max === null)) {
            // Reset to placeholder text
            setSelectedOption('Mileage');
            setMinMileage('');
            setMaxMileage('');
        } else {
            const range = predefinedMileageRanges.find(r => r.min === selected.min && r.max === selected.max);
            if (range) {
                setSelectedOption(range.label);
            } else {
                setSelectedOption('Custom Range');
                setMinMileage(selected.min || '');
                setMaxMileage(selected.max || '');
            }
        }
    }, [selected]);

    const handleOptionClick = (label, min, max) => {
        setSelectedOption(label);
        setMinMileage(min || '');
        setMaxMileage(max || '');
        setIsOpen(false);
        onChange({ min: min ? parseFloat(min) : null, max: max ? parseFloat(max) : null });
    };

    const handleMinMileageChange = (event) => {
        const value = event.target.value;
        setMinMileage(value);
        onChange({
            min: value ? parseFloat(value) : null,
            max: maxMileage ? parseFloat(maxMileage) : null
        });
    };

    const handleMaxMileageChange = (event) => {
        const value = event.target.value;
        setMaxMileage(value);
        onChange({
            min: minMileage ? parseFloat(minMileage) : null,
            max: value ? parseFloat(value) : null
        });
    };

    return (
        <div className="mileage-container" ref={containerRef}>
            <div className="select-element-mileage" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <div className="dropdown-mileage-menu">
                    {predefinedMileageRanges.map((range, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(range.label, range.min, range.max)}
                        >
                            {range.label}
                        </div>
                    ))}
                    <div className="custom-mileage-range">
                        <input
                            type="number"
                            placeholder="Min Mileage"
                            value={minMileage}
                            onChange={handleMinMileageChange}
                            className="mileage-input"
                        />
                        <input
                            type="number"
                            placeholder="Max Mileage"
                            value={maxMileage}
                            onChange={handleMaxMileageChange}
                            className="mileage-input"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectMileage;
