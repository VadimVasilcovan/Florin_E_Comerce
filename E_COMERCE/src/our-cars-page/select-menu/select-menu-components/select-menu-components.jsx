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
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const filteredCars = filterData(cars, selectedCategory);
    onFilterChange(filteredCars); // Notify parent of filtered results
  }, [selectedCategory, cars, onFilterChange]); // Ensure onFilterChange is a stable reference

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    onFilterChange(cars); // Notify parent to show all cars
  };

  function filterData(cars, selected) {
    let filteredData = cars;

    if (selected) {
      filteredData = filteredData.filter(
        ({
          carManufacturer,
          carModel,
          bodyType,
          bodyColor,
          price,
          mileage,
          productionYear,
          fuel,
        }) =>
          carManufacturer == selected ||
          carModel == selected ||
          bodyType == selected ||
          bodyColor == selected ||
          price == selected ||
          mileage == selected ||
          productionYear == selected ||
          fuel == selected
      );
    }

    return filteredData;
  }

  return (
    <div className="main-container">
      <div className="selection-menu-container-div">
        <Manufacturer cars={cars} onChange={handleChange} />
        <SelectModel cars={cars} onChange={handleChange} />
        <SelectBodyType cars={cars} onChange={handleChange} />
        <SelectColor cars={cars} onChange={handleChange} />
        <SelectPrice cars={cars} onChange={handleChange} />
        <SelectMileage cars={cars} onChange={handleChange} />
        <SelectProductionYear cars={cars} onChange={handleChange} />
        <SelectFuel cars={cars} onChange={handleChange} />

        <DeleteFiltersBtn onClick={resetFilters} />
      </div>
    </div>
  );
}

export default SelectMenu;
