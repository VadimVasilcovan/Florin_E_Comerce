import React from 'react';
import './CardMasina.css'; 

function CardMasina({ car, onClick }) {
    if (!car || !car.pictures || !car.pictures.main) {
        console.error("Invalid car object or no pictures available:", car);
        return null; 
    }

    return (
        <div className="card-masina" onClick={onClick}>
            <img src={car.pictures.main} alt={`${car.carManufacturer} ${car.carModel}`} />
            <div className="car-info">
                <h2>{car.carManufacturer} {car.carModel}</h2>
                <p>{car.productionYear} • {car.fuel} • {car.bodyType}</p>
                <p>${car.price.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default CardMasina;
