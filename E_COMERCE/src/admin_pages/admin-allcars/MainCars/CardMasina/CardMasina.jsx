import React from 'react';
import './CardMasina.css'; 

function CardMasina({ car, onClick }) {
    if (!car || !car.pictures || !car.pictures.main || !car.pictures.others) {
        console.error("Invalid car object or pictures not available:", car);
        return null; 
    }

    return (
        <div className="card-masina" onClick={onClick}>
            <div className='imagini'>
            <img className="main-photo" src={car.pictures.main} alt={`${car.carManufacturer} ${car.carModel}`} />
            <div className="small-photos">
                {car.pictures.others.slice(0, 3).map((photo, index) => (
                    <img key={index} src={photo} alt={`Thumbnail ${index + 1}`} className="thumbnail-photo" />
                ))}
            </div>
            </div>
            <div className="car-info">
                <h2>{car.carManufacturer} {car.carModel}</h2>
                <p>{car.productionYear} • {car.fuel} • {car.bodyType}</p>
                <p>${car.price.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default CardMasina;
