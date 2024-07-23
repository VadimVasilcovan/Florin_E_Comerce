import React from 'react';
import './secondary-img.css';

function SecondaryImg({ car, imgUrl }) {
  return (
    <div className="image-holder-secondary">
      {imgUrl ? <img src={imgUrl} alt="Car Secondary" className="secondary-image" /> : 'Placeholder'}
    </div>
  );
}

export default SecondaryImg;