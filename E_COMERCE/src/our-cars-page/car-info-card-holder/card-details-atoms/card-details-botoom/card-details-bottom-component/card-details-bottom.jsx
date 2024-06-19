import React from "react";
import './card-details-bottom.css'
import PanoramicSunroof from "../panoramic-sunroof/panoramic-sunroof";
import Lights from "../lights/lights";
import WheelsSize from "../wheels-size/wheels-size";
import Edition from "../edition/edition";

function CardDetailsBottom(){
    return <div className="car-details-bottom-div">
        <div>
            <PanoramicSunroof/>
            <span> / </span>
            <Lights/>
        </div>
        <div>
            <WheelsSize/>
            <span> / </span>
            <Edition/>
        </div>
    </div>
}

export default CardDetailsBottom;