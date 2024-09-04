import React, { useState } from "react";
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
    const carsPerPage = 6;

    // Calculate the indexes for slicing the cars array
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };

    return (
        <div>
            <div className="our-cars-div">
                <div className="tittile-div">
                    <OurCarsTitle />
                </div>
                <div className="our-cars-page">
                    <div>
                        <SelectMenu />
                    </div>
                    <div>
                        <SelectionContainer />
                        
                        {currentCars.map(car => (
                            <CarCardHolder key={car._id} car={car} />
                        ))}
                        
                        <Pagination
                            itemsPerPage={carsPerPage}
                            totalItems={cars.length}
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
