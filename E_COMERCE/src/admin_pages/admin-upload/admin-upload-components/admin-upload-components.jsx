import React from "react";
import AddingPictures from "../addingPictures/addingPictures";
import MainDetails from "../mainDetails/mainDetails";
import "./admin-upload-components.css"
import ExteriorAndPerformance from "../features-price/exterior-and-performance/exterior-and-performance";
import InteriorAndComfort from "../features-price/interior-and-comfort/interior-and-comfort";
import PriceAndPublish from "../features-price/price-publish/price-publish";
function Admin(){
    return <div className="admin-upload-page-main">
        <AddingPictures/>
        <MainDetails/>
        <ExteriorAndPerformance/>
        <InteriorAndComfort/>
        <PriceAndPublish/>
    </div>

}

export default Admin;