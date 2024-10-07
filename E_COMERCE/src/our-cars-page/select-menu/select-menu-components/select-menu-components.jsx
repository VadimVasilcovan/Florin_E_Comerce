import React, { useState, useEffect } from "react";
import "./select-menu-components.css";
import Manufacturer from "../atoms/manufacturer-select/manufacturer-select";
import SelectModel from "../atoms/model-select/model-select";
import SelectBodyType from "../atoms/body-type-select/body-type-select";
import SelectColor from "../atoms/color-select/color-select";
import SelectPrice from "../atoms/price-select/price-select";
import SelectMileage from "../atoms/mileage-select/mileage-select";
import SelectProductionYear from "../atoms/production-year-select/production-year-select";
import SelectFuel from "../atoms/fuel-select/fuel-select";
import DeleteFiltersBtn from "../btn-delete-filtres/btn-delete-filtres";

function SelectMenu({ cars, onFilterChange }) {
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedBodyType, setSelectedBodyType] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: null, max: null });
    const [selectedMileage, setSelectedMileage] = useState(null);
    const [selectedProductionYear, setSelectedProductionYear] = useState(null);
    const [selectedFuel, setSelectedFuel] = useState(null);

    const [filteredModels, setFilteredModels] = useState([]);
    const [filteredColors, setFilteredColors] = useState([]);
    const [filteredBodyTypes, setFilteredBodyTypes] = useState([]);

    // Apply filters to cars whenever the selected criteria change
    useEffect(() => {
        const filteredCars = filterData(cars); // Apply filter logic to cars
        const filters = {
            manufacturer: selectedManufacturer,
            model: selectedModel,
            color: selectedColor,
            bodyType: selectedBodyType,
            priceRange,
            mileage: selectedMileage,
            productionYear: selectedProductionYear,
            fuel: selectedFuel
        };

        console.log("Filters applied:", filters);  // Log current filters
        console.log("Filtered cars:", filteredCars);  // Log filtered cars
        onFilterChange(filteredCars, filters);  // Pass filtered cars and filters to parent
    }, [
        selectedManufacturer,
        selectedModel,
        selectedColor,
        selectedBodyType,
        priceRange,
        selectedMileage,
        selectedProductionYear,
        selectedFuel,
        cars,
        onFilterChange
    ]);

    // Filter models, colors, and body types when a manufacturer is selected
    useEffect(() => {
        if (selectedManufacturer) {
            const filtered = cars.filter(car => car.carManufacturer === selectedManufacturer);
            setFilteredModels([...new Set(filtered.map(car => car.carModel))]);
            setFilteredColors([...new Set(filtered.map(car => car.bodyColor))]);
            setFilteredBodyTypes([...new Set(filtered.map(car => car.bodyType))]);
        } else {
            setFilteredModels([]);
            setFilteredColors([]);
            setFilteredBodyTypes([]);
        }
    }, [selectedManufacturer, cars]);

    // Further filter colors and body types when a model is selected
    useEffect(() => {
        if (selectedModel) {
            const filtered = cars
                .filter(car => car.carManufacturer === selectedManufacturer)
                .filter(car => car.carModel === selectedModel);

            setFilteredBodyTypes([...new Set(filtered.map(car => car.bodyType))]);
            setFilteredColors([...new Set(filtered.map(car => car.bodyColor))]);
        } else {
            setFilteredBodyTypes([]);
            setFilteredColors([]);
        }
    }, [selectedModel, selectedManufacturer, cars]);

    // Function to filter cars based on selected criteria
    function filterData(cars) {
        let filteredData = cars;

        if (selectedManufacturer) {
            filteredData = filteredData.filter(car => car.carManufacturer?.toLowerCase() === selectedManufacturer.toLowerCase());
        }
        if (selectedModel) {
            filteredData = filteredData.filter(car => car.carModel?.toLowerCase() === selectedModel.toLowerCase());
        }
        if (selectedColor) {
            filteredData = filteredData.filter(car => car.bodyColor?.toLowerCase() === selectedColor.toLowerCase());
        }
        if (selectedBodyType) {
            filteredData = filteredData.filter(car => car.bodyType?.toLowerCase() === selectedBodyType.toLowerCase());
        }
        if (priceRange.min !== null || priceRange.max !== null) {
            filteredData = filteredData.filter(car => {
                const price = car.price || 0;  // Ensure price is not undefined
                return (priceRange.min === null || price >= priceRange.min) &&
                    (priceRange.max === null || price <= priceRange.max);
            });
        }
        if (selectedMileage) {
            filteredData = filteredData.filter(car => {
                const mileage = car.mileage || 0;  // Ensure mileage is not undefined
                return (selectedMileage.min === null || mileage >= selectedMileage.min) &&
                    (selectedMileage.max === null || mileage <= selectedMileage.max);
            });
        }
        if (selectedProductionYear) {
            filteredData = filteredData.filter(car => {
                const year = car.productionYear || 0;  // Ensure productionYear is not undefined
                return (selectedProductionYear.min === null || year >= selectedProductionYear.min) &&
                    (selectedProductionYear.max === null || year <= selectedProductionYear.max);
            });
        }
        if (selectedFuel) {
            filteredData = filteredData.filter(car => car.fuel?.toLowerCase() === selectedFuel.toLowerCase());
        }

        return filteredData;
    }

    // Function to reset all filters
    const resetFilters = () => {
        setSelectedManufacturer(null);
        setSelectedModel(null);
        setSelectedColor(null);
        setSelectedBodyType(null);
        setPriceRange({ min: null, max: null });
        setSelectedMileage(null);
        setSelectedProductionYear(null);
        setSelectedFuel(null);

        // Also reset filtered lists
        setFilteredModels([]);
        setFilteredColors([]);
        setFilteredBodyTypes([]);

        console.log("Filters reset");  // Log filter reset action
        onFilterChange(cars, {
            manufacturer: null,
            model: null,
            color: null,
            bodyType: null,
            priceRange: { min: null, max: null },
            mileage: null,
            productionYear: null,
            fuel: null
        });
    };

    return (
        <div className="main-container">
            <div className="selection-menu-container-div">
                <Manufacturer
                    cars={cars}
                    selected={selectedManufacturer}
                    placeholder="Manufacturer"
                    onChange={(value) => setSelectedManufacturer(value)}
                />
                <SelectModel
                    models={filteredModels}
                    selected={selectedModel}
                    placeholder="Model"
                    onChange={(value) => setSelectedModel(value)}
                />
                <SelectBodyType
                    bodyTypes={filteredBodyTypes}
                    selected={selectedBodyType}
                    placeholder="Body Type"
                    onChange={(value) => setSelectedBodyType(value)}
                />
                <SelectColor
                    colors={filteredColors}
                    selected={selectedColor}
                    placeholder="Color"
                    onChange={(value) => setSelectedColor(value)}
                />
                <SelectPrice
                    priceRange={priceRange}
                    onChange={(range) => setPriceRange(range)}
                />
                <SelectMileage
                    selectedMileage={selectedMileage}
                    onChange={(mileage) => setSelectedMileage(mileage)}
                />
                <SelectProductionYear
                    selectedYear={selectedProductionYear}
                    onChange={(yearRange) => setSelectedProductionYear(yearRange)}
                />
                <SelectFuel
                    selectedFuel={selectedFuel}
                    onChange={(value) => setSelectedFuel(value)}
                />
            </div>
            <DeleteFiltersBtn onClick={resetFilters} />
        </div>
    );
}

export default SelectMenu;
