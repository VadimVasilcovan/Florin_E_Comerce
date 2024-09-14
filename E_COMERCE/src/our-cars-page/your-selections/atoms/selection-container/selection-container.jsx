import React from "react";
import './selection-container.css';

function SelectionContainer({
    selectedManufacturer,
    selectedModel,
    selectedColor,
    selectedBodyType,
    priceRange,
    selectedMileage,
    selectedProductionYear,
    selectedFuel
}) {
    // Helper function to format the display text for price range
    const formatPriceRange = () => {
        return (priceRange.min !== null ? `$${priceRange.min}` : 'Any') +
               (priceRange.max !== null ? ` - $${priceRange.max}` : '');
    };

    // Helper function to format the display text for mileage
    const formatMileage = () => {
        return selectedMileage ? `${selectedMileage.min} - ${selectedMileage.max}` : 'Any';
    };

    // Helper function to format the display text for production year
    const formatProductionYear = () => {
        return selectedProductionYear ? `${selectedProductionYear.min} - ${selectedProductionYear.max}` : 'Any';
    };

    return (
        <div className="Selection-Container-div">
            {selectedManufacturer && <div className="filter-item">{selectedManufacturer}</div>}
            {selectedModel && <div className="filter-item">{selectedModel}</div>}
            {selectedColor && <div className="filter-item">{selectedColor}</div>}
            {selectedBodyType && <div className="filter-item">{selectedBodyType}</div>}
            {(priceRange.min !== null || priceRange.max !== null) && <div className="filter-item">Price: {formatPriceRange()}</div>}
            {selectedMileage && <div className="filter-item">Mileage: {formatMileage()}</div>}
            {selectedProductionYear && <div className="filter-item">Year: {formatProductionYear()}</div>}
            {selectedFuel && <div className="filter-item">{selectedFuel}</div>}
        </div>
    );
}

export default SelectionContainer;