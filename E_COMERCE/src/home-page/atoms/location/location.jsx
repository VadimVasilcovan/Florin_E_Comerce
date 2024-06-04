import React from 'react';
import './location.css'; 
import location from './assets/location.png';

function LocationInfoHeader() {
  return (
    <span className="location-container">
      <img src={location} alt="location" />
      <span>Bucharest/Romania</span>
    </span>
  );
}

export default LocationInfoHeader;