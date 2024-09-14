import React, { useState, useCallback } from "react";
import CarCardHolder from "../car-info-card-holder/car-info-card-holder-components/car-info-card-holder-components";
import SelectionContainer from "../your-selections/atoms/selection-container/selection-container";
import './our-cars-page-components.css';
import SelectMenu from "../select-menu/select-menu-components/select-menu-components";
import OurCarsTitle from "../our-cars-tittle/our-cars-tittle-component";
import OurCarsInfoBottom from "../our-cars-info-bottom/our-cars-info-bottom";
import Pagination from "../our-cars-pagination/our-cars-pagination";
import FooterComponent from "../../home-page/footer/footer-component/footer-component";

function OurCarsPage({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCars, setFilteredCars] = useState(cars); // State for filtered cars
    const [selectedFilters, setSelectedFilters] = useState({
        manufacturer: null,
        model: null,
        color: null,
        bodyType: null,
        priceRange: { min: null, max: null },
        mileage: null,
        productionYear: null,
        fuel: null
    }); // State for selected filters
    const carsPerPage = 6;

    // Calculate the indexes for slicing the cars array
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFilterChange = useCallback((filteredCars, filters) => {
        setFilteredCars(filteredCars);
        setSelectedFilters(filters); // Update selected filters
        setCurrentPage(1); // Reset to first page on filter change
    }, []);

    return (
        <div>
            <div className="our-cars-div">
                <div className="tittile-div">
                    <OurCarsTitle />
                </div>
                <div className="our-cars-page">
                    <div>
                        <SelectMenu cars={cars} onFilterChange={handleFilterChange} /> {/* Pass handleFilterChange */}
                    </div>
                    <div>
                        <SelectionContainer
                            selectedManufacturer={selectedFilters.manufacturer}
                            selectedModel={selectedFilters.model}
                            selectedColor={selectedFilters.color}
                            selectedBodyType={selectedFilters.bodyType}
                            priceRange={selectedFilters.priceRange}
                            selectedMileage={selectedFilters.mileage}
                            selectedProductionYear={selectedFilters.productionYear}
                            selectedFuel={selectedFilters.fuel}
                        />
                        
                        {currentCars.map(car => (
                            <CarCardHolder key={car._id} car={car} />
                        ))}
                        
                        <Pagination
                            itemsPerPage={carsPerPage}
                            totalItems={filteredCars.length} 
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
                <OurCarsInfoBottom />
            </div>
            <FooterComponent />
        </div>
    );
}

export default OurCarsPage;
