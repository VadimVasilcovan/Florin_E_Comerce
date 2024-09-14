import React, { useState, useEffect, useCallback } from "react";
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

    // Handle changes and filter data
    useEffect(() => {
        const filteredCars = filterData(cars);
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
        onFilterChange(filteredCars, filters); // Pass the filters along with filtered cars
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
        onFilterChange,
    ]);

    // Filter cars based on selected criteria
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
            filteredData = filteredData.filter(car => car.carManufacturer === selectedManufacturer);
        }
        if (selectedModel) {
            filteredData = filteredData.filter(car => car.carModel === selectedModel);
        }
        if (selectedColor) {
            filteredData = filteredData.filter(car => car.bodyColor === selectedColor);
        }
        if (selectedBodyType) {
            filteredData = filteredData.filter(car => car.bodyType === selectedBodyType);
        }
        if (priceRange.min !== null || priceRange.max !== null) {
            filteredData = filteredData.filter(car => {
                const price = car.price;
                return (priceRange.min === null || price >= priceRange.min) &&
                       (priceRange.max === null || price <= priceRange.max);
            });
        }
        if (selectedMileage) {
            filteredData = filteredData.filter(car => {
                const mileage = car.mileage;
                return (selectedMileage.min === null || mileage >= selectedMileage.min) &&
                       (selectedMileage.max === null || mileage <= selectedMileage.max);
            });
        }
        if (selectedProductionYear) {
            filteredData = filteredData.filter(car => {
                const year = car.productionYear;
                return (selectedProductionYear.min === null || year >= selectedProductionYear.min) &&
                       (selectedProductionYear.max === null || year <= selectedProductionYear.max);
            });
        }
        if (selectedFuel) {
            filteredData = filteredData.filter(car => car.fuel === selectedFuel);
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
        setFilteredModels([]);
        setFilteredColors([]);
        setFilteredBodyTypes([]);
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
                    selected={selectedMileage} 
                    onChange={(value) => setSelectedMileage(value)} 
                />
                <SelectProductionYear 
                    selected={selectedProductionYear} 
                    onChange={(value) => setSelectedProductionYear(value)} 
                />
                <SelectFuel 
                    selected={selectedFuel} 
                    onChange={(value) => setSelectedFuel(value)} 
                />
                <DeleteFiltersBtn onClick={resetFilters} />
            </div>
        </div>
    );
}

export default SelectMenu;
