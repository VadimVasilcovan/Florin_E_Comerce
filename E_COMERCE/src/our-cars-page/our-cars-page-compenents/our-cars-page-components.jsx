import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
    const [filteredCars, setFilteredCars] = useState(cars); 
    const [selectedFilters, setSelectedFilters] = useState({
        manufacturer: null,
        model: null,
        color: null,
        bodyType: null,
        priceRange: { min: null, max: null },
        mileage: null,
        productionYear: null,
        fuel: null
    }); 
    const carsPerPage = 6;

    const location = useLocation(); 

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const searchTerm = searchParams.get('search')?.toLowerCase(); 
    
        if (searchTerm) {
            // Split the search term into individual keywords
            const keywords = searchTerm.split(' ').filter(Boolean);
            
            const filtered = cars.filter(car => {
                // Check if all keywords are present in either manufacturer or model
                return keywords.every(keyword => 
                    (car.carManufacturer?.toLowerCase().includes(keyword) || 
                     car.carModel?.toLowerCase().includes(keyword))
                );
            });
            
            setFilteredCars(filtered); 
        } else {
            setFilteredCars(cars); 
        }
    }, [location.search, cars]);

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFilterChange = useCallback((filteredCars, filters) => {
        setFilteredCars(filteredCars);
        setSelectedFilters(filters); 
        setCurrentPage(1); 
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
