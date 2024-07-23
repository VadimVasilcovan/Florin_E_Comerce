import React from "react";
import './fuel.css'

function Fuel({car}){
    return<span>
        {car.fuel}
    </span>
}

export default Fuel