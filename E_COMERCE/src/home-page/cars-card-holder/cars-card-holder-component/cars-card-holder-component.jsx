import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './cars-card-holder-component.css';

function CarsCardHolderComponent() {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('http://localhost:9990/cars') 
            .then(response => response.json())
            .then(data => {
                setCars(data);
            })
            .catch(error => console.error('Error fetching cars:', error));
    }, []);

    const handleCardClick = (carId) => {
        navigate(`/cars/${carId}`);
    };

    return (
        <div className="cars-card-holder-component">
            {cars.slice(0, 6).map(car => ( // Displaying only the first 6 items
                <div 
                    key={car._id} 
                    className="car-card"
                    onClick={() => handleCardClick(car._id)} 
                >
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
