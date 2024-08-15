import React from 'react';
import './details-button.css'; 
import { Link } from 'react-router-dom';

function DetailsBtn({ car }) {
  return (
    <Link to={`/cars/${car._id}`}>
      <button className="details-btn">Details</button>
    </Link>
  );
}

export default DetailsBtn;