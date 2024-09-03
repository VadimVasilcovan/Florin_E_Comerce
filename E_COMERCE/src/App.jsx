import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import NavbarComponent from './navbar/navbar';
import HomePage from './home-page/home-page-components/home-page-components';
import OurCarsPage from './our-cars-page/our-cars-page-compenents/our-cars-page-components';
import React, { useState, useEffect } from 'react';
import Detail from './detail_page/Detail';
import Admin from './admin_pages/admin-upload/admin-upload-components/admin-upload-components';
import Edit from './admin_pages/admin-edit/Edit.jsx';
import AllCars from './admin_pages/admin-allcars/AllCars.jsx';

function App() {
  const [cars, setCars] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:9990/cars') // URL to fetch data from backend
      .then(response => response.json())
      .then(data => {
        console.log('Fetched cars data:', data); // Log the fetched data
        setCars(data); // Update state with fetched data
      })
      .catch(error => console.error('Error fetching cars:', error)); // Error handling
  }, []);

  // Updated condition to hide navbar on /admin, /admin/all, and /cars/:id paths
  const showNavbar = !location.pathname.startsWith('/admin') && !location.pathname.startsWith('/cars/');

  return (
    <>
      {showNavbar && <NavbarComponent />}
      
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<OurCarsPage cars={cars} />} />
          <Route path="/admin" element={<Admin />} /> {/* Admin route */}
          <Route path="/admin/all" element={<AllCars cars={cars}/>}/>
          <Route path="/admin/edit/:id" element={<Edit cars={cars} />} /> {/* Edit route */}
          <Route path="/cars/:id" element={<Detail cars={cars} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
