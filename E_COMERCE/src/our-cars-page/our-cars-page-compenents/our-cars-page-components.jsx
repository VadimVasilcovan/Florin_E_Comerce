import React from "react";
import CarCardHolder from "../car-info-card-holder/car-info-card-holder-components/car-info-card-holder-components";
import SelectionContainer from "../your-selections/atoms/selection-container/selection-container";
import './our-cars-page-components.css'
import SelectMenu from "../select-menu/select-menu-components/select-menu-components";
import OurCarsTitle from "../our-cars-tittle/our-cars-tittle-component";
import OurCarsInfoBottom from "../our-cars-info-bottom/our-cars-info-bottom";
import OurCarsPagination from "../our-cars-pagination/our-cars-pagination";
function OurCarsPage(){
    return<div className="our-cars-div">
          <div className="tittile-div">
            <OurCarsTitle/>
          </div>
        <div className="our-cars-page">
            <div>
                <SelectMenu/>
            </div>
          <div>
            <SelectionContainer/>
            <CarCardHolder/>
            <OurCarsPagination/>
          </div>
        </div>
        <OurCarsInfoBottom/>
    </div>

}
export default OurCarsPage;