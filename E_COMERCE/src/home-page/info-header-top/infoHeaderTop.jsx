import React from 'react';
import './infoHeaderTop.css';
import AFBcars from '../atoms/AFB-Cars/afb-car.jsx';
import PhoneNumber from '../atoms/phone-number/phoneNumber.jsx';
import LocationInfoHeader from '../atoms/location/location.jsx';

function InfoHeaderTop() {
  return (
    <div className='InfoHeaderTopCss'>
        <div className="top-content">
            <AFBcars/>
            <div className='right-side-elements'>
            <PhoneNumber/>
            <LocationInfoHeader/>
            </div>
        </div>
        <div className="hr-container">
            <hr />
        </div>
    </div>
  );
}

export default InfoHeaderTop;