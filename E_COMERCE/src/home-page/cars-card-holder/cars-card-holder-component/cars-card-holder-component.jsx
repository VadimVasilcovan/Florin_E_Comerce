import React from 'react';
import './cars-card-holder-component.css';
import CarsName from '../atoms/cars-name/cars-name';
import CarsPrice from '../atoms/cars-price/cars-price';

function CarsCardHolderComponent() {
    return (
        <span className="cars-card-holder-component">
            <CarsName />
            <CarsPrice />
        </span>
    );
}

export default CarsCardHolderComponent;