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
            <Lights/>
        </div>
        <div>
            <WheelsSize/>
            <Edition/>
        </div>
    </div>
}

export default CardDetailsBottom;