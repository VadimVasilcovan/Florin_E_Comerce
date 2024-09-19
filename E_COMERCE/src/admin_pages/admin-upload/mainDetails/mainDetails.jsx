import React, { useState, useEffect } from "react";
import "./mainDetails.css";

function MainDetails({ setCarDetails, carDetails }) {
  const [carManufacturer, setCarManufacturer] = useState(carDetails.carManufacturer || "");
  const [carModel, setCarModel] = useState(carDetails.carModel || "");
  const [productionYear, setProductionYear] = useState(carDetails.productionYear || "");
  const [mileage, setMileage] = useState(carDetails.mileage || "");
  const [fuel, setFuel] = useState(carDetails.fuel || "");
  const [displacement, setDisplacement] = useState(carDetails.displacement || "");
  const [power, setPower] = useState(carDetails.power || "");
  const [bodyType, setBodyType] = useState(carDetails.bodyType || "");
  const [transmission, setTransmission] = useState(carDetails.transmission || "");
  const [doorsNumber, setDoorsNumber] = useState(carDetails.doorsNumber || "");
  const [seatsNumber, setSeatsNumber] = useState(carDetails.seatsNumber || "");
  const [bodyColor, setBodyColor] = useState(carDetails.bodyColor || "");
  const [interiorColor, setInteriorColor] = useState(carDetails.interiorColor || "");
  const [vinNumber, setVinNumber] = useState(carDetails.vinNumber || "");
  const [firstRegistration, setFirstRegistration] = useState(carDetails.firstRegistration || "");

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

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      alert("Please fill in all required fields and ensure values are correct.");
      return;
    }

    alert("Details submitted successfully!");
  };

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
            <input className={getInputClass('doorsNumber')} value={doorsNumber} onChange={(e) => setDoorsNumber(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Seats number</span>
            <input className={getInputClass('seatsNumber')} value={seatsNumber} onChange={(e) => setSeatsNumber(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>Body color</span>
            <input className={getInputClass('bodyColor')} value={bodyColor} onChange={(e) => setBodyColor(e.target.value)} />
          </div>
        </div>

        <div className="details-aligment-div">
          <div className="details-aligment-div-second">
            <span>Interior color</span>
            <input className={getInputClass('interiorColor')} value={interiorColor} onChange={(e) => setInteriorColor(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>VIN number</span>
            <input className={getInputClass('vinNumber')} value={vinNumber} onChange={(e) => setVinNumber(e.target.value)} />
          </div>
          <div className="details-aligment-div-second">
            <span>First registration</span>
            <input className={getInputClass('firstRegistration')} value={firstRegistration} onChange={(e) => setFirstRegistration(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="btn-submit">
        <button className="next-btn" onClick={handleSubmit}>
          Next step
        </button>
      </div>
    </div>
  );
}

export default MainDetails;
