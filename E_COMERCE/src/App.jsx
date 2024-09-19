import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from './navbar/navbar';
import HomePage from './home-page/home-page-components/home-page-components';
import OurCarsPage from './our-cars-page/our-cars-page-compenents/our-cars-page-components';
import React, { useState, useEffect } from 'react';
import Detail from './detail_page/Detail';
import Admin from './admin_pages/admin-upload/admin-upload-components/admin-upload-components';
import AllCars from './admin_pages/admin-allcars/AllCars.jsx';

function App() {
  const [cars, setCars] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:9990/cars')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched cars data:', data);
        setCars(data);
      })
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const showNavbar = !location.pathname.startsWith('/admin') && !location.pathname.startsWith('/cars/');

  return (
    <>
      {showNavbar && <NavbarComponent />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<OurCarsPage cars={cars} />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/all" element={<AllCars cars={cars} />} />
          <Route path="/admin/:id" element={<Admin />} /> {/* Reuse Admin component */}
          <Route path="/cars/:id" element={<Detail cars={cars} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
