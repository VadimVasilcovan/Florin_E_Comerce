import React from "react";
import './btn-delete-filtres.css'


function DeleteFiltersBtn({ onClick }){
    return<button className="delete-btn-filters" onClick={onClick}>
            Delete filters
    </button>
}

export default DeleteFiltersBtn;