import React from "react";
import CardMasina from "./CardMasina/CardMasina.jsx";
import { useNavigate } from "react-router-dom";
import "./MainCars.css";

function MainCars({ cars }) {
  const navigate = useNavigate();

  const handleAddCarClick = () => {
    navigate("/admin"); // Empty form for adding a new car
  };

  const handleEditCarClick = (carId) => {
    navigate(`/admin/${carId}`); // Navigates to edit page with the car ID
  };

  const handleDeleteCar = (carId) => {
    // Send delete request to the server
    fetch(`http://localhost:9990/cars/${carId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Optionally handle success
        } else {
          throw new Error("Failed to delete the car.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="MainCarsall-div">
      <div className="adminall-title">
        <h1>Edit / add cars</h1>
        <button onClick={handleAddCarClick}>+ Add new car</button>
      </div>
      <div className="main-cars">
        {cars.map((car) => (
          <CardMasina 
            key={car._id} 
            car={car} 
            onDelete={handleDeleteCar} 
            onEdit={handleEditCarClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default MainCars;
