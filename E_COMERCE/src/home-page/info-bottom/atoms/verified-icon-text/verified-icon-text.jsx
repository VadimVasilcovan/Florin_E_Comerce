import React from 'react';
import verified from './assets/verified.png';
import './verified-icon-text.css';

function VerifiedIconAndText() {
  return (
    <div className="verified-container">
      <img className='verified-icon' src={verified} alt='verified-icon' />
      <p>Verified Cars</p>
    </div>
  );
}

export default VerifiedIconAndText;