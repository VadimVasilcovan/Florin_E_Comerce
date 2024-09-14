import React, { useState, useEffect, useRef } from "react";
import './color-select.css';

function SelectColor({ colors, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState('Color');
    const containerRef = useRef(null);

    // Reset selection when colors change
    useEffect(() => {
        setSelectedColor('Color');
    }, [colors]);

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

    const handleOptionClick = (color) => {
        setSelectedColor(color);
        setIsOpen(false);
        onChange(color); // Pass the selected color back to the parent
    };

    return (
        <div className="color-container" ref={containerRef}>
            <div
                className="select-element-color"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedColor}
            </div>
            {isOpen && (
                <div className="dropdown-color-menu">
                    {colors.length > 0 ? (
                        colors.map((color, index) => (
                            <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionClick(color)}
                            >
                                {color}
                            </div>
                        ))
                    ) : (
                        <div className="dropdown-option">No colors available</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SelectColor;
