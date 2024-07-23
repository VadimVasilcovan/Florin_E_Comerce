import React from "react";
import './horse-power.css'

function HorsePower({car}){
    return<span>
        {car.power}HP
    </span>
}
export default HorsePower;