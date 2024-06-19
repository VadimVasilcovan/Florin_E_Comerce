import React from "react";
import './card-details-top-component.css'
import Mileage from "../mileage/mileage";
import HorsePower from "../hp/horse-power";
import Transmision from "../transmission/transmision";
import Fuel from "../fuel/fuel";
import Displacement from "../displacement/displacement";

function CarDetailsTop(){
    return<div>
        <div>
            <Mileage/>
            <span> / </span>
            <HorsePower/>
        </div>
        <div>
            <Transmision/>
            <span> / </span>
            <Fuel/>
            <span> / </span>
            <Displacement/>
        </div>
    </div>
}

export default CarDetailsTop;