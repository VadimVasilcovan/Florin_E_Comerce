import React from "react";
import "./Features.css";

function Features({ car }) {
  if (!car || !car.features) {
    return <p>No features available.</p>;
  }

  const { exteriorAndPerformance } = car.features;

  if (
    !exteriorAndPerformance ||
    Object.keys(exteriorAndPerformance).length === 0
  ) {
    return <p>No exterior and performance features available.</p>;
  }

  return (
    <div className="big">
      <div className="feature-box">
        <h1 className="feature-title">Features</h1>
        <h2 className="subtitle">Exterior & Performance</h2>
        {Object.entries(exteriorAndPerformance).map(([key, value], index) => (
          <p key={index}>
            {key} {value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Features;
