import React from 'react';
import './cars-btn.css'; 
import {Link} from 'react-router-dom' 

function CarsBtn() {
  return <Link to="/cars" className="cars-btn">Cars</Link>;
}

export default CarsBtn;