import React, { useState, useEffect } from 'react';
import CarCardHolder from './car-info-card-holder/car-info-card-holder-components/car-info-card-holder-components';
function CarsCardHolderComponent() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9990/cars') // URL to fetch data from backend
            .then(response => response.json())
            .then(data => setCars(data)) // Update state with fetched data
            .catch(error => console.error('Error fetching cars:', error)); // Error handling
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <div className="cars-card-holder-component">
            {cars.slice(0, 6).map(car => (
                <CarCardHolder key={car._id} car={car} /> // Render CarCardHolder for each car
            ))}
        </div>
    );
}

export default CarsCardHolderComponent;
