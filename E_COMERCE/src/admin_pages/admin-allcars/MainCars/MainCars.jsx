import React, { useEffect, useState } from "react";
import CardMasina from "./CardMasina/CardMasina.jsx"; 
import "./MainCars.css";

function MainCars() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch('http://localhost:9990/cars');
                const data = await response.json();
                setCars(data);
            } catch (error) {
                console.error("Failed to fetch cars:", error);
            }
        };

        fetchCars();
    }, []);

    return (
        <div>
            <div>
                <h1>Edit/addcars</h1>
                <button>+ Add new car</button>
            </div>
        <div className="main-cars">
            {cars.slice(0, 9).map((car) => (
                <CardMasina key={car._id} car={car} />
            ))}
        </div>
        </div>
    );
}

export default MainCars;
