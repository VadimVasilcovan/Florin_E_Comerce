import React, { useState, useEffect } from "react";
import "./addingPictures.css";

function AddingPictures({ setPictures, pictures }) {
  const [mainImage, setMainImage] = useState(pictures.mainImage || "");
const [secondaryImages, setSecondaryImages] = useState(pictures.secondaryImages || []);


useEffect(() => {
  console.log("Updating pictures:", { main: mainImage, secondary: secondaryImages });
  setPictures({ main: mainImage, secondary: secondaryImages });
}, [mainImage, secondaryImages, setPictures]);


  const handleImageUpload = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log(reader.result); // Log to ensure the base64 string is valid
        setImageFunction(reader.result); // Convert image to base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMainImageUpload = (event) => {
    handleImageUpload(event, setMainImage);
  };

  const handleSecondaryImageUpload = (event) => {
    handleImageUpload(event, (newImage) => {
      setSecondaryImages((prevImages) => [
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
            src={mainImage || 'placeholder-main.png'}  // Main image preview
          />
        </div>
        <div className="secondary-img-upload-div">
          {secondaryImages.slice(0, 4).map((image, index) => (
            <img 
              key={index} 
              className="secondary-img-upload" 
              alt={`Secondary ${index + 1}`} 
              src={image}  // Secondary image preview
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
