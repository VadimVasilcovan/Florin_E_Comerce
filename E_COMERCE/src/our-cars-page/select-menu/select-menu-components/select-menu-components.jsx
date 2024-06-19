import React from "react";
import './select-menu-components.css'
import Manufacturer from "../atoms/manufacturer-select/manufacturer-select";
import SelectModel from "../atoms/model-select/model-select";
import SelectBodyType from "../atoms/body-type-select/body-type-select";
import SelectColor from "../atoms/color-select/color-select";
import SelectPrice from "../atoms/price-select/price-select";
import SelectMileage from "../atoms/mileage-select/mileage-select";
import SelectProductionYear from "../atoms/production-year-select/production-year-select";
import SelectFuel from "../atoms/fuel-select/fuel-select";
import DeleteFiltersBtn from "../btn-delete-filtres/btn-delete-filtres";

function SelectMenu (){
    return<div className="selection-menu-container">
        <div className="selection-menu-container-div">
        <Manufacturer/>
        <SelectModel/>
        <SelectBodyType/>
        <SelectColor/>
        <SelectPrice/>
        <SelectMileage/>
        <SelectProductionYear/>
        <SelectFuel/>
        <DeleteFiltersBtn/>
        </div>
    </div>
}

export default SelectMenu;