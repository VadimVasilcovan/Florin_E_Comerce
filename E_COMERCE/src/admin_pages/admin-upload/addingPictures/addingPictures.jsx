import React, { useState, useEffect } from "react";
import "./addingPictures.css";

function AddingPictures({ setPictures, pictures }) {
  const [main, setMain] = useState(pictures.main || "");
  const [others, setOthers] = useState(pictures.others || []);

  useEffect(() => {
    setPictures({ main, others });
  }, [main, others, setPictures]);

  const handleImageUpload = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFunction(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMainImageUpload = (event) => {
    handleImageUpload(event, setMain);
  };

  const handleSecondaryImageUpload = (event) => {
    handleImageUpload(event, (newImage) => {
      setOthers((prevImages) => [
        ...prevImages.slice(0, 4), // Limit to 4 images
        newImage,
      ]);
    });
  };

  return (
    <div className="adding-pictures-div">
      <div className="div-info-top-img">
        <button>Back</button>
        <h1>1: Adding pictures</h1>
        <label>
          <input 
            type="file" 
            style={{ display: 'none' }} 
            onChange={handleSecondaryImageUpload}
          />
          <button 
            className="upload-pictures-btn"
            onClick={(e) => e.target.previousSibling.click()}
          >
            + Upload Pictures
          </button>
        </label>
        <span>
          Upload pictures then drag them around to arrange them.
          The main picture will appear on the homepage, so choose wisely.
        </span>
      </div>
      <div className="img-admin-upload-div">
        <div className="main-img-upload-div">
          <img 
            className="main-img-upload" 
            alt="Main" 
            src={main || 'placeholder-main.png'} // Ensure placeholder image is present
          />
        </div>
        <div className="secondary-img-upload-div">
          {others.slice(0, 4).map((image, index) => (
            <img 
              key={index} 
              className="secondary-img-upload" 
              alt={`Secondary ${index + 1}`} 
              src={image} // Ensure secondary images are correctly displayed
            />
          ))}
        </div>
      </div>
      <label className="div-info-top-img">
        <input  
          type="file" 
          style={{ display: 'none' }} 
          onChange={handleMainImageUpload}
        />
        <button 
          className="main-picture-btn" 
          onClick={(e) => e.target.previousSibling.click()}
        >
          Main picture
        </button>
      </label>
    </div>
  );
}

export default AddingPictures;
