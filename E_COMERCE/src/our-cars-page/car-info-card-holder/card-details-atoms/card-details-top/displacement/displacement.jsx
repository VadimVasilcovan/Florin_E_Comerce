import React from "react";
import './displacement.css'

function Displacement({car}){
    return<span>
        {car.displacement}cm3
    </span>
}
export default Displacement;