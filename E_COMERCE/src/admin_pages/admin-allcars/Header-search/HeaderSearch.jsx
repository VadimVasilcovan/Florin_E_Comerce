import React from "react";
import './HeaderSearch.css';

function HeaderSearch({ searchText, setSearchText, setSortOption }) {
    return (
        <div className="search-filter-div">
            <div className="btn-group">
                <button className="header-btn active">Edit / add cars</button>
                <button className="header-btn">Visitor view</button>
            </div>
            <div className="search-container-admin-edit-page">
                <input 
                    type="text"
                    placeholder="Search by manufacturer or model"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="input-search"
                />
            </div>
            <div className="sort-by">
                <span>Sort by:</span>
                <select 
                    className="sort-select" 
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">None</option>
                    <option value="price-asc">Price - Ascending</option>
                    <option value="price-desc">Price - Descending</option>
                    
                </select>
            </div>
        </div>
    );
}

export default HeaderSearch;
