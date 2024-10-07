import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddingPictures from "../addingPictures/addingPictures";
import MainDetails from "../mainDetails/mainDetails";
import ExteriorAndPerformance from "../features-price/exterior-and-performance/exterior-and-performance";
import InteriorAndComfort from "../features-price/interior-and-comfort/interior-and-comfort";
import PriceAndPublish from "../features-price/price-publish/price-publish";
import "./admin-upload-components.css";
import Vector from "../admin-upload-components/assets/Vector.png";
import Group from "../admin-upload-components/assets/Group.png";

function Admin() {
  const { id } = useParams(); // Get the car's ID from URL params
  const navigate = useNavigate(); // Navigation hook

  // State variables for the car data
  const [carDetails, setCarDetails] = useState({
    name: "",
    model: "",
    year: "",
    // Add other necessary fields for new car
  });
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState({ main: "", others: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCarDetails(); // Fetch the car details if editing an existing car
    } else {
      setLoading(false); // No loading needed for new car
    }
  }, [id]);

  const fetchCarDetails = () => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:9990/cars/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch car details");
        }
        return response.json();
      })
      .then((data) => {
        setCarDetails(data);
        setExteriorFeatures(data.features?.exterior || []);
        setInteriorFeatures(data.features?.interior || []);
        setPrice(data.price || "");
        setPictures({
          main: data.pictures?.main || "",
          others: data.pictures?.others || [],
        });
      })
      .catch((error) => {
        setError("Error fetching car details: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePublish = () => {
    const carData = {
      ...carDetails,
      features: {
        exterior: exteriorFeatures,
        interior: interiorFeatures,
      },
      pictures,
      price,
    };

    const method = id ? "PUT" : "POST"; // Determine if it's an update or a new entry
    const url = id ? `http://localhost:9990/cars/${id}` : "http://localhost:9990/cars";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to publish the vehicle.");
        }
        return response.json();
      })
      .then((data) => {
        // Store only essential information to avoid exceeding storage quota
        localStorage.setItem(`car_${data.id}`, JSON.stringify({ id: data.id, name: data.name }));
        navigate("/admin/all"); // Redirect to the car list after publishing
      })
      .catch((error) => {
        setError("Error publishing vehicle: " + error.message); // Handle errors
      });
  };

  if (loading) {
    return <div>Loading car details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="admin-upload-page-main">
        <AddingPictures 
          setPictures={setPictures} 
          pictures={pictures} 
        />
        <MainDetails 
          setCarDetails={setCarDetails} 
          carDetails={carDetails} 
        />
        <ExteriorAndPerformance
          setExteriorFeatures={setExteriorFeatures}
          exteriorFeatures={exteriorFeatures}
        />
        <InteriorAndComfort
          setInteriorFeatures={setInteriorFeatures}
          interiorFeatures={interiorFeatures}
        />
        <PriceAndPublish 
          setPrice={setPrice} 
          price={price} 
          onPublish={handlePublish} 
        />
      </div>
      <div className="footer-admin-div">
        <img src={Vector} alt="Icon" />
        <img src={Group} alt="Icon" />
      </div>
    </>
  );
}

export default Admin;
