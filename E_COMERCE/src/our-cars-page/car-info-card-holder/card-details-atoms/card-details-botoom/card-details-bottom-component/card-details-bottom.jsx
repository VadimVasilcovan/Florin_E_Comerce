import React from 'react';
import './card-details-bottom.css';

function CardDetailsBottom({ car }) {
  const { exteriorAndPerformance = {}, interiorAndComfort = {} } = car.features || {};

  // Get the first 2 features from exteriorAndPerformance
  const exteriorFeatures = Object.entries(exteriorAndPerformance).slice(0, 2);
  // Get the first 3 features from interiorAndComfort
  const interiorFeatures = Object.entries(interiorAndComfort).slice(0, 3);

  const renderFeatures = (features) => {
    return features.map(([key, value], index) => (
      <React.Fragment key={key}>
        <span>{value}</span>
        {index < features.length - 1 && <span>  </span>}
        <span>{key}</span>
        {index < features.length - 1 && <span> / &nbsp; </span>}
      </React.Fragment>
    ));
  };

  return (
    <div className="card-details-bottom">
      <div className="details-top-row">
        {renderFeatures(exteriorFeatures)}
      </div>
      <div className="details-bottom-row">
        {renderFeatures(interiorFeatures)}
      </div>
    </div>
  );
}

export default CardDetailsBottom;
