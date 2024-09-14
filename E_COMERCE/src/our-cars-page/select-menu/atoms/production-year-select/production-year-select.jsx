import React, { useState, useEffect, useRef } from "react";
import './production-year-select.css';

const predefinedYearRanges = [
    { label: 'All Years', min: null, max: null },
    { label: 'Before 2000', min: null, max: 1999 },
    { label: '2000 - 2010', min: 2000, max: 2010 },
    { label: '2011 - 2020', min: 2011, max: 2020 },
    { label: '2021 - 2023', min: 2021, max: 2023 },
];

function SelectProductionYear({ selected, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Production Year');
    const [minYear, setMinYear] = useState('');
    const [maxYear, setMaxYear] = useState('');
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
            setSelectedOption('Production Year');
            setMinYear('');
            setMaxYear('');
        } else {
            const range = predefinedYearRanges.find(r => r.min === selected.min && r.max === selected.max);
            if (range) {
                setSelectedOption(range.label);
            } else {
                setSelectedOption('Custom Range');
                setMinYear(selected.min || '');
                setMaxYear(selected.max || '');
            }
        }
    }, [selected]);

    const handleOptionClick = (label, min, max) => {
        setSelectedOption(label);
        setMinYear(min || '');
        setMaxYear(max || '');
        setIsOpen(false);
        onChange({ min: min ? parseInt(min) : null, max: max ? parseInt(max) : null });
    };

    const handleMinYearChange = (event) => {
        const value = event.target.value;
        setMinYear(value);
        onChange({
            min: value ? parseInt(value) : null,
            max: maxYear ? parseInt(maxYear) : null,
        });
    };

    const handleMaxYearChange = (event) => {
        const value = event.target.value;
        setMaxYear(value);
        onChange({
            min: minYear ? parseInt(minYear) : null,
            max: value ? parseInt(value) : null,
        });
    };

    return (
        <div className="production-year-container" ref={containerRef}>
            <div className="select-element-production-year" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <div className="dropdown-year-menu">
                    {predefinedYearRanges.map((range, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(range.label, range.min, range.max)}
                        >
                            {range.label}
                        </div>
                    ))}
                    <div className="custom-year-range">
                        <input
                            type="number"
                            placeholder="Min Year"
                            value={minYear}
                            onChange={handleMinYearChange}
                            className="year-input"
                        />
                        <input
                            type="number"
                            placeholder="Max Year"
                            value={maxYear}
                            onChange={handleMaxYearChange}
                            className="year-input"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectProductionYear;
