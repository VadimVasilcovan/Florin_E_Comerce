import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Edit.css";

function Edit({ cars }) {  // Destructuring props to get `cars`
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find((car) => car._id === id);

    if (!car) {
        return <div>Car not found</div>;
    }

    const handleEditClick = () => {
        navigate(`/admin/edit/${id}`);  // Assuming /admin/edit/:id routes to AddingPictures
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
