import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import searchIcon from './assets/searchIcon.png';
import './input.css';

function InputSearch() {
  const [searchText, setSearchText] = useState(''); 
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (searchText.trim()) {
      navigate(`/cars?search=${searchText}`);
    }
  };

  const clearSearch = () => {
    setSearchText('');
    navigate('/cars'); // This will reset the search
  };

  // Reset search text when location changes
  useEffect(() => {
    if (location.pathname === '/') {
      setSearchText('');
    } else {
      const searchParams = new URLSearchParams(location.search);
      const searchTerm = searchParams.get('search') || '';
      setSearchText(searchTerm);
    }
  }, [location]);

  return (
    <form onSubmit={handleSearch} className="input-container">
      <input
        type="text"
        className="input-search"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)} 
      />
      {searchText && (
        <button
          type="button"
          className="clear-btn"
          onClick={clearSearch}
        >
          &times;
        </button>
      )}
      <button type="submit" className="search-btn">
        <img src={searchIcon} alt="Search" />
      </button>
    </form>
  );
}

export default InputSearch;
