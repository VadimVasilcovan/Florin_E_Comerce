import React from "react";
import CarCardHolder from "../car-info-card-holder/car-info-card-holder-components/car-info-card-holder-components";
import SelectionContainer from "../your-selections/atoms/selection-container/selection-container";
import './our-cars-page-components.css';
import SelectMenu from "../select-menu/select-menu-components/select-menu-components";
import OurCarsTitle from "../our-cars-tittle/our-cars-tittle-component";
import OurCarsInfoBottom from "../our-cars-info-bottom/our-cars-info-bottom";
import OurCarsPagination from "../our-cars-pagination/our-cars-pagination";
import FooterComponent from "../../home-page/footer/footer-component/footer-component";

function OurCarsPage({ cars } ) {
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
                    {/* Map over the cars array to render each CarCardHolder */}
                    {cars.slice(0, 6).map(car => (
                        <CarCardHolder key={car._id} car={car} />
                    ))}
                    <OurCarsPagination />
                </div>
            </div>
            <OurCarsInfoBottom />
        </div>
        <FooterComponent/>
        </div>
    );
}

export default OurCarsPage;