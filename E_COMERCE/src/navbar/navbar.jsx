import React from 'react';
import InfoHeaderTop from '../home-page/info-header-top/infoHeaderTop';
import InfoHeaderTopSecond from '../home-page/info-header-top-second/info-header-top-second';
import './navbar.css';

function NavbarComponent() {
    return (
        <div className='navbar-container'>
            <div className='navbar-div'>
                <InfoHeaderTop />
                <InfoHeaderTopSecond />
            </div>
        </div>
    );
}

export default NavbarComponent;