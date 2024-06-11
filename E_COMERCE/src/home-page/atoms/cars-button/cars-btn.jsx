import React from 'react';
import './cars-btn.css'; 
import { NavLink } from 'react-router-dom';

function CarsBtn() {
  return (
    <NavLink to="/cars" className={({ isActive }) => isActive ? "cars-btn active" : "cars-btn"}>
      Cars
    </NavLink>
  );
}

export default CarsBtn;