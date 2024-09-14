import React, { useState, useEffect, useRef } from "react";
import './body-type-select.css';

function SelectBodyType({ bodyTypes, selected, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBodyType, setSelectedBodyType] = useState('Body Type');
    const containerRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Update selectedBodyType state when the selected prop changes
    useEffect(() => {
        setSelectedBodyType(selected || 'Body Type');
    }, [selected]);

    const handleOptionClick = (bodyType) => {
        setSelectedBodyType(bodyType);
        setIsOpen(false);
        onChange(bodyType); // Notify parent of the selected body type
    };

    return (
        <div className="body-type-container" ref={containerRef}>
            <div
                className="select-element-body-type"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedBodyType}
            </div>
            {isOpen && (
                <div className="dropdown-body-type-menu">
                    {bodyTypes.length > 0 ? (
                        bodyTypes.map((type, index) => (
                            <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionClick(type)}
                            >
                                {type}
                            </div>
                        ))
                    ) : (
                        <div className="dropdown-option">No body types available</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SelectBodyType;
