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

  // New state to store validation errors
  const [validationErrors, setValidationErrors] = useState({});

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
    let errors = {};

    // Validation logic
    if (!carManufacturer) errors.carManufacturer = true;
    if (!carModel) errors.carModel = true;
    if (!productionYear || isNaN(productionYear)) errors.productionYear = true;
    if (!vinNumber) errors.vinNumber = true;
    if (!mileage || isNaN(mileage)) errors.mileage = true;
    if (!fuel) errors.fuel = true;
    if (!displacement) errors.displacement = true;
    if (!power || isNaN(power)) errors.power = true;
    if (!bodyType) errors.bodyType = true;
    if (!transmission) errors.transmission = true;
    if (!doorsNumber || isNaN(doorsNumber)) errors.doorsNumber = true;
    if (!seatsNumber || isNaN(seatsNumber)) errors.seatsNumber = true;
    if (!bodyColor) errors.bodyColor = true;
    if (!interiorColor) errors.interiorColor = true;
    if (!firstRegistration) errors.firstRegistration = true;

    // Set validation errors state
    setValidationErrors(errors);

    // If there are no errors, proceed with form submission
    if (Object.keys(errors).length > 0) {
      alert("Please fill in all required fields and ensure values are correct.");
      return;
    }

    alert("Details submitted successfully!");
  };

  // Function to get conditional input class
  const getInputClass = (fieldName) => {
    return validationErrors[fieldName] ? "admin-input error" : "admin-input";
  };

  return (
    <div className="main-details-div-parent">
      <div className="main-details-div">
        <h1>2: Main Details</h1>
        <hr />
        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Car manufacturer</span>
            <input className={getInputClass('carManufacturer')} value={carManufacturer} onChange={(e) => setCarManufacturer(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Car model</span>
            <input className={getInputClass('carModel')} value={carModel} onChange={(e) => setCarModel(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Production year</span>
            <input className={getInputClass('productionYear')} value={productionYear} onChange={(e) => setProductionYear(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Mileage</span>
            <input className={getInputClass('mileage')} value={mileage} onChange={(e) => setMileage(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Fuel</span>
            <input className={getInputClass('fuel')} value={fuel} onChange={(e) => setFuel(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Displacement</span>
            <input className={getInputClass('displacement')} value={displacement} onChange={(e) => setDisplacement(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Power</span>
            <input className={getInputClass('power')} value={power} onChange={(e) => setPower(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Body type</span>
            <input className={getInputClass('bodyType')} value={bodyType} onChange={(e) => setBodyType(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Transmission</span>
            <input className={getInputClass('transmission')} value={transmission} onChange={(e) => setTransmission(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Doors number</span>
            <input className={getInputClass('doorsNumber')} type="number" value={doorsNumber} onChange={(e) => setDoorsNumber(Number(e.target.value))} />
          </div>
          <div className="details-aligment-div-second">
            <span>Seats number</span>
            <input className={getInputClass('seatsNumber')} type="number" value={seatsNumber} onChange={(e) => setSeatsNumber(Number(e.target.value))} />
          </div>
          <div className="details-aligment-div-second">
            <span>Interior color</span>
            <input className={getInputClass('interiorColor')} value={interiorColor} onChange={(e) => setInteriorColor(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Body color</span>
            <input className={getInputClass('bodyColor')} value={bodyColor} onChange={(e) => setBodyColor(e.target.value)} />
          </div>

          <div className="details-aligment-second">
            <div className="vin-number-registration-div">
              <div className="details-aligment-div-second">
                <span>Vin number</span>
                <input className={getInputClass('vinNumber')} value={vinNumber} onChange={(e) => setVinNumber(e.target.value)} />
              </div>
              <div className="details-aligment-div-second">
                <span>First Registration</span>
                <input className={getInputClass('firstRegistration')} type="date" value={firstRegistration} onChange={(e) => setFirstRegistration(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <button className="admin-upload-input" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default MainDetails;
