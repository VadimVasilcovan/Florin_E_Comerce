import React from 'react';
import './home-btn.css'; 
import { Link } from 'react-router-dom';

function HomeBtn() {
  return (
    <Link to="/" className="home-btn">
      Home
    </Link>
  );
}

export default HomeBtn;