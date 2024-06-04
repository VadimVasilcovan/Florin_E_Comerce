import React from 'react';
import './backGround-img.css'; 
import carBackground from './assets/carBackground.png';

function BackGroundIMG() {
  return (
    <div className="backGroundimgDiv">
      <img className='backGroundimg' src={carBackground} alt="cars img" />
    </div>
  );
}

export default BackGroundIMG;