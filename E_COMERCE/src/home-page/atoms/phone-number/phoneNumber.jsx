import React from 'react';
import './phoneNumber.css'; 
import whatsapp from './assets/whatsapp.png';

function PhoneNumber() {
  return (
    <span className="phone-number-container">
      <img src={whatsapp} alt="whatsapp" />
      <span> +40 722 213 593</span>
    </span>
  );
}

export default PhoneNumber;