import React from "react";
import './price.css'

function PriceCarCardHolder ({car}){
    return<div className="price">
        <h1>{car && car.price ? car.price : "Loading..."}</h1>
        <h1 className="currency">€</h1>
        <span>Incl. Blabl VAT</span>
    </div>

}

export default PriceCarCardHolder