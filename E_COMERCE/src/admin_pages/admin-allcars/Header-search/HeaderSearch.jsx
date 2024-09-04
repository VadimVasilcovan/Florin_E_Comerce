import React from "react";
import searchIcon from './assets/searchIcon.png';
import './HeaderSearch.css';
import InputSearch from "../../../home-page/atoms/input-search/input";

function HeaderSearch() {
  return (
    <div className="search-filter-div">
      <div className="btn-group">
        <button className="header-btn active">Edit / add cars</button>
        <button className="header-btn">Visitor view</button>
      </div>
      <div className="search-container-admin-edit-page">
        <InputSearch/>
      </div>
      <div className="sort-by">
        <span>Sort by:</span>
        <select className="sort-select">
          <option>Price - Ascending</option>
          <option>Price - Descending</option>
          
        </select>
      </div>
    </div>
  );
}

export default HeaderSearch;
