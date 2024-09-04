import React, { useState } from "react";
import './AllCars.css';
import afbcarsIcon from './assets/afbCarsIcon.png'; 
import Vector from './assets/Vector.png'
import Group from './assets/Group.png'
import HeaderSearch from "./Header-search/HeaderSearch";
import MainCars from "./MainCars/MainCars.jsx";
import Pagination from "../../our-cars-page/our-cars-pagination/our-cars-pagination.jsx";

function AllCars({ cars }) {
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 9;

   
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

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
                <HeaderSearch cars={cars}/> 
                <MainCars cars={currentCars}/> 
                <Pagination
                    itemsPerPage={carsPerPage}
                    totalItems={cars.length}
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
