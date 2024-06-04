import React from 'react';
import searchIcon from'./assets/searchIcon.png'
import './input.css'

function InputSearch() {
  return (
    <span className="input-container">
      <input type="text" className="input-search" placeholder="Search.." />
      <button className="search-btn"><img src={searchIcon} alt="Search" /></button> 
    </span>
  );
}

export default InputSearch;