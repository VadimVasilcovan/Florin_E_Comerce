import React from "react";
import filterImg from './assets/filter.png'
import './filter-media-button.css';

function MediaFilterBtn (){

    return(

        <button className="media-filter-btn"> <img src={filterImg} alt="IMg" /> Filters </button>
    )

}
export default MediaFilterBtn;