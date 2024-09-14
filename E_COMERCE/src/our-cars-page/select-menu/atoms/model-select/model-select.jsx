import React, { useState, useEffect, useRef } from "react";
import './model-select.css';

function SelectModel({ models, selected, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState('Model');
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

    // Update selectedModel state when the selected prop changes
    useEffect(() => {
        setSelectedModel(selected || 'Model');
    }, [selected]);

    const handleOptionClick = (model) => {
        setSelectedModel(model);
        setIsOpen(false);
        onChange(model); // Notify parent of the selected model
    };

    return (
        <div className="model-container" ref={containerRef}>
            <div
                className="select-element-model"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedModel}
            </div>
            {isOpen && (
                <div className="dropdown-model-menu">
                    {models.length > 0 ? (
                        models.map((model, index) => (
                            <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleOptionClick(model)}
                            >
                                {model}
                            </div>
                        ))
                    ) : (
                        <div className="dropdown-option">No models available</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SelectModel;
