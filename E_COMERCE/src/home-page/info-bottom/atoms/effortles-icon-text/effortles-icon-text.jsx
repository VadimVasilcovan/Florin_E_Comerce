import React from 'react';
import './effortles-icon-text.css';
import truck from './assets/truck.png';

function EffortlesIconAndText(){
    return <div className="effortles-container">
    <img className='effortles-icon' src={truck} alt='truck-icon' />
    <p>Effortles sheeping</p>
  </div>
}
export default EffortlesIconAndText;