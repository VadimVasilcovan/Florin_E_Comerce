import React from 'react';
import './home-btn.css'; 
import { NavLink } from 'react-router-dom';

function HomeBtn() {
  return (
    <NavLink to="/" className={({ isActive }) => isActive ? "home-btn active" : "home-btn"}>
      Home
    </NavLink>
  );
}

export default HomeBtn;