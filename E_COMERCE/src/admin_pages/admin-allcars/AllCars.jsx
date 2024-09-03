import React from "react";
import './AllCars.css'
import afbcarsIcon from './assets/afbCarsIcon.png'; 
import HeaderSearch from "./Header-search/HeaderSearch";
import MainCars from "./MainCars/MainCars.jsx";
function AllCars (cars){
    return(
        <div>
         <div className="HeaderLogo" >
      <img   src={afbcarsIcon} alt="Icon" />
      
    </div>
    <div>
       <HeaderSearch cars={cars}/> 
       <MainCars cars={cars}/>
    </div>
    </div>
        
    )
}
export default AllCars