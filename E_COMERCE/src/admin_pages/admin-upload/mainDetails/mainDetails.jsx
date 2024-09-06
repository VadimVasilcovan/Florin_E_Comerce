import React, { useState, useEffect } from "react";
import "./mainDetails.css";

function MainDetails({ setCarDetails }) {
  const [carManufacturer, setCarManufacturer] = useState("");
  const [carModel, setCarModel] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuel, setFuel] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [power, setPower] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [doorsNumber, setDoorsNumber] = useState("");
  const [seatsNumber, setSeatsNumber] = useState("");
  const [bodyColor, setBodyColor] = useState("");
  const [interiorColor, setInteriorColor] = useState("");
  const [vinNumber, setVinNumber] = useState("");
  const [firstRegistration, setFirstRegistration] = useState("");

  useEffect(() => {
    setCarDetails({
      carManufacturer,
      carModel,
      productionYear,
      mileage,
      fuel,
      displacement,
      power,
      bodyType,
      transmission,
      doorsNumber,
      seatsNumber,
      bodyColor,
      interiorColor,
      vinNumber,
      firstRegistration,
    });
  }, [
    carManufacturer, carModel, productionYear, mileage, fuel,
    displacement, power, bodyType, transmission, doorsNumber,
    seatsNumber, bodyColor, interiorColor, vinNumber, firstRegistration,
    setCarDetails
  ]);

  const handleSubmit = () => {
    // Simple validation example
    if (!carManufacturer || !carModel || !productionYear || !vinNumber) {
      alert("Please fill in all required fields (Car Manufacturer, Model, Year, and VIN Number).");
      return;
    }

    // If everything is valid, you could proceed to submit the data
    alert("Details submitted successfully!");
  };

  return (
    <div className="main-details-div-parent">
      <div className="main-details-div">
        <h1>2: Main Details</h1>
        <hr />
        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Car manufacturer</span>
            <input value={carManufacturer} onChange={(e) => setCarManufacturer(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Car model</span>
            <input value={carModel} onChange={(e) => setCarModel(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Production year</span>
            <input value={productionYear} onChange={(e) => setProductionYear(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Mileage</span>
            <input value={mileage} onChange={(e) => setMileage(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Fuel</span>
            <input value={fuel} onChange={(e) => setFuel(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Displacement</span>
            <input value={displacement} onChange={(e) => setDisplacement(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Power</span>
            <input value={power} onChange={(e) => setPower(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Body type</span>
            <input value={bodyType} onChange={(e) => setBodyType(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Transmission</span>
            <input value={transmission} onChange={(e) => setTransmission(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Doors number</span>
            <input type="number" value={doorsNumber} onChange={(e) => setDoorsNumber(Number(e.target.value))} />
          </div>
          <div className="details-aligment-div-second">
            <span>Seats number</span>
            <input type="number" value={seatsNumber} onChange={(e) => setSeatsNumber(Number(e.target.value))} />
          </div>
          <div className="details-aligment-div-second">
            <span>Interior color</span>
            <input value={interiorColor} onChange={(e) => setInteriorColor(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Body color</span>
            <input value={bodyColor} onChange={(e) => setBodyColor(e.target.value)} />
          </div>

          <div className="details-aligment-second">
            <div className="vin-number-registration-div">
              <div className="details-aligment-div-second">
                <span>Vin number</span>
                <input className="input-vin-number-div" value={vinNumber} onChange={(e) => setVinNumber(e.target.value)} />
              </div>
              <div className="details-aligment-div-second">
                <span>First Registration</span>
                <input type="date" value={firstRegistration} onChange={(e) => setFirstRegistration(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default MainDetails;
