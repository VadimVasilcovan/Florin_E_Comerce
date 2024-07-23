import React from "react";
import './card-details-top-component.css'
import Mileage from "../mileage/mileage";
import HorsePower from "../hp/horse-power";
import Transmision from "../transmission/transmision";
import Fuel from "../fuel/fuel";
import Displacement from "../displacement/displacement";

function CarDetailsTop({car}){
    return<div>
        <div>
            <Mileage car={car}/>
            <span> / </span>
            <HorsePower car={car}/>
        </div>
        <div>
            <Transmision car={car}/>
            <span> / </span>
            <Fuel car={car}/>
            <span> / </span>
            <Displacement car={car}/>
        </div>
    </div>
}

export default CarDetailsTop;