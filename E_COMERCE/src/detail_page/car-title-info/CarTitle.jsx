import React from "react";
import "./CarTitle.css";

function CarTitle({ car }) {
  return (
    <div className="div-mother">
        <div className="div-father">
      <div className="first-two">
        <div className="big-title">
          <h1>{car.carManufacturer} {car.carModel}</h1>
          <p>{car.productionYear}</p>
        </div>
        <div className="boxes">
          <div className="box1">
            <div>
              <h1>Body Color</h1>
              <p>{car.bodyColor}</p>
            </div>
            <div>
              <h1>Interior Color</h1>
              <p>{car.interiorColor}</p>
            </div>
            <div>
              <h1>Transmission</h1>
              <p>{car.transmission}</p>
            </div>
            <div>
              <h1>Vin Number</h1>
              <p>{car.vinNumber}</p>
            </div>
          </div>
          <div className="box2">
            <div>
              <h1>Mileage</h1>
              <p>{car.mileage} km</p>
            </div>
            <div>
              <h1>Fuel</h1>
              <p>{car.fuel}</p>
            </div>
            <div>
              <h1>Displacement</h1>
              <p>{car.displacement} cc</p>
            </div>
            <div>
              <h1>Power</h1>
              <p>{car.power} hp</p>
            </div>
          </div>
          <div className="box3">
            <div>
              <h1>Body Type</h1>
              <p>{car.bodyType}</p>
            </div>
            <div>
              <h1>Doors Number</h1>
              <p>{car.doorsNumber}</p>
            </div>
            <div>
              <h1>Seat Number</h1>
              <p>{car.seatsNumber}</p>
            </div>
            <div>
              <h1>First Registration</h1>
              <p>{new Date(car.firstRegistration).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="price-box">
        <h1>${car.price.toLocaleString()}</h1>
        <p className="p1">Incl. VAT</p>
        <div className="buttons">
          <button className="order-now">Order now</button>
          <button className="chat-whatsapp">Chat via WhatsApp</button>
          <button className="share">Share</button>
        </div>
        <p className="p2">Bucharest / Romania</p>
        <p className="p3">Str. Splaiul Independentei, <br/> 251 A-B</p>
      </div>
      </div>
    </div>
  );
}

export default CarTitle;
