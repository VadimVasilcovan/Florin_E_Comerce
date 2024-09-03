
import React from 'react';
import './see-cars-btn.css';
import { NavLink } from 'react-router-dom';
 
function SeeCarsBtn() {
  return (
    <NavLink to="/cars" className={({ isActive }) => isActive ? "see-cars-btn active" : "cars-btn"}>
      <div className='see-cars-btn-div'>
      <button className='see-cars-btn'>
        See our cars
      </button>
      </div>
    </NavLink>
  );
}
 
export default SeeCarsBtn;
 