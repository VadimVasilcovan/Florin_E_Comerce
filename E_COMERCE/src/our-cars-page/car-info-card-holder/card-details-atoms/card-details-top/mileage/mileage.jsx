import React from "react";
import './mileage.css'

function Mileage({car}){
    return<span>
        {car.mileage}km
    </span>
}
export default Mileage