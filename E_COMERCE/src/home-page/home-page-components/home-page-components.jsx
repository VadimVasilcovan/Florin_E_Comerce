import React from 'react';
import './home-page-components.css';
import InfoHeaderTop from '../info-header-top/infoHeaderTop';
import InfoHeaderTopSecond from '../info-header-top-second/info-header-top-second';
import BackGroundComponents from '../backGround/backGround-component/backGround-component';
import CarsCardHolderComponent from '../cars-card-holder/cars-card-holder-component/cars-card-holder-component';
import InfoBottomComponent from '../info-bottom/info-bottom-component/info-bottom-component';
import FooterComponent from '../footer/footer-component/footer-component';


function HomePage() {
    return (
        <div className="page-div">
            <div className="home-page">
                <InfoHeaderTop />
                <InfoHeaderTopSecond />
                </div>
                <div className='background-img-div'>
                <BackGroundComponents />
                </div>
                <div className="home-page">
                <CarsCardHolderComponent />
                <InfoBottomComponent />
                </div>
           
            <FooterComponent />
             {/* Move FooterComponent outside of home-page */}
        </div>
    );
}

export default HomePage;