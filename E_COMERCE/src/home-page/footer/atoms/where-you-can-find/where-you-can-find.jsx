import React from "react";
import './where-you-can-find.css';
import location from './assets/location.png'

function WhereYouCanFind(){
    return <div className="location-container-footer">
        <span>Where you can find us</span>
        <div className="location-icon-text-div">
            <img className="location-icon" src={location} alt='location-icon'/>
            <span>
            Bucharest/Romania
            </span>
        </div>
    </div>
}
export default WhereYouCanFind