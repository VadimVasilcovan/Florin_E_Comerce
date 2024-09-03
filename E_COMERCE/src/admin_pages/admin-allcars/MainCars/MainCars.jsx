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
        <div className="main-cars">
            {cars.map((car) => (
                <CardMasina key={car._id} car={car} />
            ))}
        </div>
    );
}

export default MainCars;
