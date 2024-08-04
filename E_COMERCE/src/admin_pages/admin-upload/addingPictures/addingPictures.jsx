import React from "react";
import "./addingPictures.css";

function AddingPictures(){
    return (
        <div className="adding-pictures-div">
                <div className="div-info-top-img">
                <button>Back</button>
                <h1>1:Adding pictures</h1>
                    <button>+ Upload Pictures</button>
                    <span>Upload pictures then drag them around to arrange them.
                     The main picture will appear on the homepage, so chose wisely.
                     </span>
                </div>
            <div className="img-admin-upload-div">
                <img className="main-img-upload" alt="Main" />
                <div className="secondary-img-upload-div">
                    <img className="secondary-img-upload" alt="Secondary 1" />
                    <img className="secondary-img-upload" alt="Secondary 2" />
                    <img className="secondary-img-upload" alt="Secondary 3" />
                    <img className="secondary-img-upload" alt="Secondary 4" />
                </div>
            </div>
            <button className="main-picture-btn">Main picture</button>
        </div>
    );
}

export default AddingPictures;