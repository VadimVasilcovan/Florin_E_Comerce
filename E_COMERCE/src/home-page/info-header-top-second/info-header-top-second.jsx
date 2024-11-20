import React, { useState } from 'react';
import './info-header-top-second.css';
import HomeBtn from '../atoms/home-button/home-btn';
import CarsBtn from '../atoms/cars-button/cars-btn';
import AboutUsBtn from '../atoms/about-us-button/about-us-btn';
import ContactBtn from '../atoms/contact-button/contact-btn';
import InputSearch from '../atoms/input-search/input';

function InfoHeaderTopSecond() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="info-Header-Top-Second">
            <div className={`menu ${menuOpen ? 'show' : ''}`}>
                <HomeBtn />
                <CarsBtn />
                <AboutUsBtn />
                <ContactBtn />
            </div>
            {/* Position search input outside of the menu */}
            <div className={`search-container ${menuOpen ? 'left' : ''}`}>
                <InputSearch />
            </div>
            <button className="burger-menu" onClick={toggleMenu}>
                &#9776; {/* Hamburger Icon */}
            </button>
        </div>
    );
}

export default InfoHeaderTopSecond;
