import React from 'react';
import './main-img.css';

function MainImg({ car }) { // Accept car as a prop
  return (
    <div className="image-holder">
      {car && car.pictures && car.pictures.main ? ( // Check if car and car.pictures.main are available
        <img className="main-image" src={car.pictures.main} alt="Car Main" /> // Display the image if car.pictures.main is provided
      ) : (
        <p>Loading...</p> // Display a loading message if car.pictures.main is not provided
      )}
    </div>
  );
}

export default MainImg;