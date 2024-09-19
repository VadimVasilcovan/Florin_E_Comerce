import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Edit.css";

function Edit({ cars }) {  // Destructuring props to get `cars`
  const { id } = useParams();
  const navigate = useNavigate();

  if (!cars || cars.length === 0) {
    return <div>Loading...</div>;  // Show loading until cars are fetched
  }

  const car = cars.find((car) => car._id === id);

  if (!car) {
    return <div>Car not found</div>;  // Handle case when car is not found
  }

  const handleEditClick = () => {
    navigate(`/admin/edit/${id}`);
  };

  return (
    <div>
      <h2>Editing {car.make} {car.model}</h2>
      <button onClick={handleEditClick}>Edit Images</button>
      {/* Rest of your Edit form goes here */}
    </div>
  );
}

export default Edit;
