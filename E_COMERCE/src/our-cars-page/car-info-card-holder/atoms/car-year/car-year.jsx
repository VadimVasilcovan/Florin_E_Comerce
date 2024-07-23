import React from "react";
import './car-year.css'

function CarYear({car}){
    return <span>
      {car && car.productionYear ? car.productionYear : "Loading..."} {/* Display car name or a loading message */}
    </span>
}

export default CarYear;