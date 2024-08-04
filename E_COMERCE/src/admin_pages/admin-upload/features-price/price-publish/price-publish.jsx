import React from "react";
import "./price-publish.css"

function PriceAndPublish (){
    return (
        <div className="price-and-publish">
            <div className="admin-price-div">
            <h1>
                4: Price
            </h1>
            <hr/>
            <div className="price-input-div"></div>
            <input/>
            <button>+</button>
            </div>
            <div className="admin-publish-div">
                <h1>5: Publish</h1>
                <hr/>
                <div className="publish-buttons-div"></div>
                <button>Publish vehicles</button>
                <button>Discard changes</button>
            </div>
        </div>
    )
}

export default PriceAndPublish;