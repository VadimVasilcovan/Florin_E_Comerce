import React, { useState, useEffect } from "react";
import './AllCars.css';
import afbcarsIcon from './assets/afbCarsIcon.png'; 
import Vector from './assets/Vector.png';
import Group from './assets/Group.png';
import HeaderSearch from "./Header-search/HeaderSearch";
import MainCars from "./MainCars/MainCars.jsx";
import Pagination from "../../our-cars-page/our-cars-pagination/our-cars-pagination.jsx";

function AllCars({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [filteredCars, setFilteredCars] = useState(cars); 
    const carsPerPage = 8;

    useEffect(() => {
        const query = searchText.toLowerCase();
        const keywords = query.split(' ').filter(Boolean);

        const filtered = cars.filter(car => 
            keywords.every(keyword => 
                (car.carManufacturer?.toLowerCase().includes(keyword) || 
                 car.carModel?.toLowerCase().includes(keyword))
            )
        );

        setFilteredCars(filtered); 
    }, [searchText, cars]);

    const filterAndSortCars = () => {
      
        const sortedCars = [...filteredCars]; 
    
        if (sortOption === 'price-asc') {
            sortedCars.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
            sortedCars.sort((a, b) => b.price - a.price);
        }
      
    
        return sortedCars;
    };
    const filteredAndSortedCars = filterAndSortCars();

    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredAndSortedCars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber); 
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    return (
        <div>
            <div className="MainCarsall-bigdiv">
                <div className="AllCars-big-div">
                    <div className="HeaderLogo">
                        <img src={afbcarsIcon} alt="Icon" />
                    </div>
                    <div>
                        <HeaderSearch 
                            searchText={searchText} 
                            setSearchText={setSearchText} 
                            setSortOption={setSortOption} 
                        />
                        <MainCars cars={currentCars}/> 
                        <Pagination
                            itemsPerPage={carsPerPage}
                            totalItems={filteredAndSortedCars.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
            <div className='footer-admin-div'>
                <img src={Vector} alt="Icon" />
                <img src={Group} alt="Icon" />
            </div>
        </div>
    );
}

export default AllCars;
