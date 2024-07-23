import './App.css';
import { Route, Routes } from "react-router-dom";
import NavbarComponent from './navbar/navbar';
import HomePage from './home-page/home-page-components/home-page-components';
import OurCarsPage from './our-cars-page/our-cars-page-compenents/our-cars-page-components';
import React, { useState, useEffect } from 'react';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9990/cars') // URL to fetch data from backend
      .then(response => response.json())
      .then(data => setCars(data)) // Update state with fetched data
      .catch(error => console.error('Error fetching cars:', error)); // Error handling
  }, []);

  return (
    <>
      <NavbarComponent />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<OurCarsPage cars={cars} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;