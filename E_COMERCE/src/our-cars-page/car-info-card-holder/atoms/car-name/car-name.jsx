import React from "react";
import './car-name.css';

function CarNameInfoHolder({ car }) { // Accept car as a prop
  return (
    <h1>
      {car && car.carManufacturer ? car.carManufacturer : "Loading..."} {/* Display car name or a loading message */}
    </h1>
  );
}

export default CarNameInfoHolder;