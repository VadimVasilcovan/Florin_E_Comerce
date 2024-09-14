import React, { useState, useEffect, useRef } from "react";
import './manufacturer-select.css';

function Manufacturer({ cars, selected, onChange, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedManufacturer, setSelectedManufacturer] = useState(placeholder);
    const [manufacturers, setManufacturers] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        if (cars && Array.isArray(cars)) {
            const uniqueManufacturers = [...new Set(cars.map(car => car.carManufacturer))];
            setManufacturers(uniqueManufacturers);
        }
    }, [cars]);

    useEffect(() => {
        setSelectedManufacturer(selected || placeholder);  // Update local state when `selected` prop changes
    }, [selected, placeholder]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOptionClick = (manufacturer) => {
        setSelectedManufacturer(manufacturer);
        setIsOpen(false);
        onChange(manufacturer);  // Notify parent of the selected manufacturer
    };

    return (
        <div className="manufacturer-container" ref={containerRef}>
            <div
                className="select-element-manufacturer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedManufacturer}
            </div>
            {isOpen && (
                <div className="dropdown-manufacturer-menu">
                    {manufacturers.length > 0 ? (
                        manufacturers.map((manufacturer, index) => (
                            <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionClick(manufacturer)}
                            >
                                {manufacturer}
                            </div>
                        ))
                    ) : (
                        <div className="dropdown-option">No manufacturers available</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Manufacturer;
