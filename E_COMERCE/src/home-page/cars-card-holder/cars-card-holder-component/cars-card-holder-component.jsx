import React, { useState, useEffect } from 'react';
import './cars-card-holder-component.css';
import CarsName from '../atoms/cars-name/cars-name';
import CarsPrice from '../atoms/cars-price/cars-price';

function CarsCardHolderComponent() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9990/cars') // Replace with your backend URL
            .then(response => response.json())
            .then(data => {
                setCars(data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    return (
        <div className="cars-card-holder-component">
            {cars.slice(0, 6).map(car => ( // Displaying only the first 6 items
                <div key={car._id} className="car-card">
                    <div className='car-name-model-div'>
                    <h1 className='car-name'>{car.carManufacturer}</h1>
                    <h1 className='car-model'>{car.carModel}</h1>
                    </div>
                    <img className="main-picture" src={car.pictures.main} alt="Car Main" />
                    <h1 className="car-price">Price: ${car.price}</h1>
                </div>
            ))}
        </div>
    );
}

export default CarsCardHolderComponent;