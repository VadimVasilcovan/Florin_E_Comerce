import React from 'react';
import './car-info-card-holder-components.css';
import MainImg from '../atoms/main-img/main-img';
import SecondaryImg from '../atoms/secondary-img/secondary-img';
import CarName from '../atoms/car-name/car-name';
import CarNameInfoHolder from '../atoms/car-name/car-name';
import CarYear from '../atoms/car-year/car-year';
import CarDetailsTop from '../card-details-atoms/card-details-top/card-details-top-component/card-details-top-component';
import IsHybrid from '../atoms/is-hybrid/is-hybrid';
import PriceCarCardHolder from '../atoms/price/price';
import DetailsBtn from '../atoms/details-button/details-button';
import ContactUsBtn from '../atoms/contact-button/contact-button';
import CardDetailsBottom from '../card-details-atoms/card-details-botoom/card-details-bottom-component/card-details-bottom';


function CarCardHolder() {
    return (
        <div className='car-card-holder-component'>
            <div className='img-holder'>
                <MainImg/>
                <div className='secondary-img'>
                    <SecondaryImg/>
                    <SecondaryImg/>
                    <SecondaryImg/>
                </div>
            </div>
            <div className='information-div'>
                <CarNameInfoHolder/>
                <CarYear/>
                <CarDetailsTop/>
                <IsHybrid/>
                <PriceCarCardHolder/>
                <div>
                <DetailsBtn/>
                <ContactUsBtn/>
                </div>
                <div>
                <CardDetailsBottom/>
                </div>
            </div>
        </div>
    );
}

export default CarCardHolder;