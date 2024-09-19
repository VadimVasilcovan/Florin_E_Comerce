import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CardMasina.css';

function CardMasina({ car, onDelete, onEdit }) {
  const navigate = useNavigate();

  if (!car || !car.pictures || !car.pictures.main || !car.pictures.others) {
    console.error("Invalid car object or pictures not available:", car);
    return null;
  }

  const handleEdit = () => {
    onEdit(car._id); // Call the parent method to navigate to edit page
  };

 

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      onDelete(car._id);  // Pass the car ID to the parent component for deletion
    }
  };

  return (
    <div className="card-masina">
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
        <p>${car.price.toLocaleString()}</p>
        <button className='edit-button' onClick={handleEdit}>Edit</button>
        <button className='delete-button' onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

export default CardMasina;
