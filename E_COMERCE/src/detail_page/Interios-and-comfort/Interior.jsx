import React from "react";
import "./Interior.css";

function Interior({ car }) {
  if (!car || !car.features) {
    return <p>No features available.</p>;
  }

  const { interiorAndComfort } = car.features;

  if (!interiorAndComfort || Object.keys(interiorAndComfort).length === 0) {
    return <p>No interior and comfort features available.</p>;
  }

  return (
    <div className="big-box">
      <div className="Interior-box">
        
        <h2 className="sub-title">Interior & Comfort</h2>
        {Object.entries(interiorAndComfort).map(([key, value], index) => (
          <p key={index}>
            {key} {value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Interior;
