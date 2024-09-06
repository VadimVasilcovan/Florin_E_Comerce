import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './cars-card-holder-component.css';

function CarsCardHolderComponent() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('http://localhost:9990/cars') 
            .then(response => response.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
                setLoading(false);
            });
    }, []);

    const handleCardClick = (carId) => {
        navigate(`/cars/${carId}`);
    };

    return (
        <div className="cars-card-holder-component">
            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                cars.slice(0, 6).map(car => (
                    <div 
                        key={car._id} 
                        className="car-card"
                        onClick={() => handleCardClick(car._id)} 
                    >
                        <div className='car-name-model-div'>
                            <h2 className='car-name'>{car.carManufacturer}</h2>
                            <h2 className='car-model'>{car.carModel}</h2>
                        </div>
                        <img className="main-picture" src={car.pictures.main} alt="Car Main" />
                        <h2 className="car-price">Price: ${car.price}</h2>
                    </div>
                ))
            )}
        </div>
    );
}

export default CarsCardHolderComponent;
