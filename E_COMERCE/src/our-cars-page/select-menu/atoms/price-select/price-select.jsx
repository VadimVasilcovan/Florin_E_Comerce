import React, { useState, useEffect, useRef } from "react";
import './price-select.css';

const predefinedPriceRanges = [
    { label: 'All Prices', min: null, max: null },
    { label: '$0 - $10,000', min: 0, max: 10000 },
    { label: '$10,001 - $20,000', min: 10001, max: 20000 },
    { label: '$20,001 - $30,000', min: 20001, max: 30000 },
    { label: '$30,001 - $40,000', min: 30001, max: 40000 },
    { label: '$40,001 - $50,000', min: 40001, max: 50000 },
    { label: 'Above $50,000', min: 50001, max: null },
];

function SelectPrice({ priceRange, onChange, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder || 'Price');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
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
        if (priceRange.min === null && priceRange.max === null) {
            setSelectedOption(placeholder || 'Price');
            setMinPrice('');
            setMaxPrice('');
        } else {
            const range = predefinedPriceRanges.find(r => r.min === priceRange.min && r.max === priceRange.max);
            if (range) {
                setSelectedOption(range.label);
            } else {
                setSelectedOption('Custom Range');
                setMinPrice(priceRange.min || '');
                setMaxPrice(priceRange.max || '');
            }
        }
    }, [priceRange, placeholder]);

    const handleOptionClick = (label, min, max) => {
        setSelectedOption(label);
        setMinPrice(min || '');
        setMaxPrice(max || '');
        setIsOpen(false);
        onChange({ min: min ? parseFloat(min) : null, max: max ? parseFloat(max) : null });
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
        onChange({
            min: event.target.value ? parseFloat(event.target.value) : null,
            max: maxPrice ? parseFloat(maxPrice) : null
        });
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
        onChange({
            min: minPrice ? parseFloat(minPrice) : null,
            max: event.target.value ? parseFloat(event.target.value) : null
        });
    };

    return (
        <div className="price-container" ref={containerRef}>
            <div className="select-element-price" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    {predefinedPriceRanges.map((range, index) => (
                        <div
                            key={index}
                            className="dropdown-option"
                            onClick={() => handleOptionClick(range.label, range.min, range.max)}
                        >
                            {range.label}
                        </div>
                    ))}
                    <div className="custom-range">
                        <input
                            type="number"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={handleMinPriceChange}
                        />
                        <input
                            type="number"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SelectPrice;

