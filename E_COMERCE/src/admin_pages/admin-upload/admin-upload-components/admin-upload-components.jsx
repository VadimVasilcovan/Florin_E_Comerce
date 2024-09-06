import React, { useState } from "react";
import AddingPictures from "../addingPictures/addingPictures";
import MainDetails from "../mainDetails/mainDetails";
import ExteriorAndPerformance from "../features-price/exterior-and-performance/exterior-and-performance";
import InteriorAndComfort from "../features-price/interior-and-comfort/interior-and-comfort";
import PriceAndPublish from "../features-price/price-publish/price-publish";
import "./admin-upload-components.css";
import Vector from "../admin-upload-components/assets/Vector.png";
import Group from "../admin-upload-components/assets/Group.png";

function Admin() {
  const [carDetails, setCarDetails] = useState({});
  const [exteriorFeatures, setExteriorFeatures] = useState([]);
  const [interiorFeatures, setInteriorFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [pictures, setPictures] = useState({
    mainImage: '',
    secondaryImages: []
  });

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

    // Send the collected data to the server
    fetch("http://localhost:9990/cars", {
      method: "POST",
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
        // Optionally redirect or show a success message
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="admin-upload-page-main">
        <AddingPictures setPictures={setPictures} />
        <MainDetails setCarDetails={setCarDetails} />
        <ExteriorAndPerformance setExteriorFeatures={setExteriorFeatures} />
        <InteriorAndComfort setInteriorFeatures={setInteriorFeatures} />
        <PriceAndPublish setPrice={setPrice} onPublish={handlePublish} />
      </div>
      <div className="footer-admin-div">
        <img src={Vector} alt="Icon" />
        <img src={Group} alt="Icon" />
      </div>
    </>
  );
}

export default Admin;
