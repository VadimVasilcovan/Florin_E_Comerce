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
  const { id } = useParams(); // Get ID from URL parameters if available
  const navigate = useNavigate();

  const [carDetails, setCarDetails] = useState({});
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState({
    mainImage: "",
    secondaryImages: [],
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:9990/cars/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setCarDetails(data);
            setExteriorFeatures(data.features?.exterior || []);
            setInteriorFeatures(data.features?.interior || []);
            setPrice(data.price || "");
            setPictures({
              mainImage: data.pictures?.main || "",
              secondaryImages: data.pictures?.secondary || [],
            });
          } else {
            console.error("Received unexpected data format:", data);
          }
        })
        .catch((error) => console.error("Error fetching car details:", error));
    }
  }, [id]);

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

    const method = id ? "PUT" : "POST"; // Use PUT for editing and POST for adding
    const url = id
      ? (`http://localhost:9990/cars/${id}`)
      : ("http://localhost:9990/cars"); // URL for API call

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to publish the vehicle.");
        }
      })
      .then((data) => {
        console.log("Success:", data);
        navigate("/admin/all"); // Redirect after success
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="admin-upload-page-main">
        <AddingPictures setPictures={setPictures} pictures={pictures} />
        <MainDetails setCarDetails={setCarDetails} carDetails={carDetails} />
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
