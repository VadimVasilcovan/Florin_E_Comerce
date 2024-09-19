import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";
import Images from "./images-component/Images";
import CarTitle from "./car-title-info/CarTitle";
import FooterComponent from "../home-page/footer/footer-component/footer-component";
import Features from "./Features/Features";
import Interior from "./Interios-and-comfort/Interior.jsx";
import Need from "./Need-more-info/Need.jsx";

function Detail({ cars }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((car) => car._id === id);

  useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <Images car={car} navigate={navigate} />
      <CarTitle car={car} />
      <Features car={car} />
      <Interior car={car} />
      <Need />
      <FooterComponent />
    </div>
  );
}

export default Detail;
