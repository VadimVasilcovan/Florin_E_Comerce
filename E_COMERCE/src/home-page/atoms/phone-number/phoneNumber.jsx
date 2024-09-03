import React from 'react';
import './phoneNumber.css'; 
import whatsapp from './assets/whatsapp.png';

function PhoneNumber() {
  return (
    <span className="phone-number-container">
      <img src={whatsapp} alt="whatsapp" />
      <span className='spaniel1'> <a className='ancora1' target='_blank' href="https://wa.me/message/TKWE7FD2IJ4DH1">+40 722 213 593</a> </span>
    </span>
  );
}

export default PhoneNumber;