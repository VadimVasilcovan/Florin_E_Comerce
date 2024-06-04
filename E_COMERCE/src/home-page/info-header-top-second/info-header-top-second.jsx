import React from 'react'
import './info-header-top-second.css'
import HomeBtn from '../atoms/home-button/home-btn';
import CarsBtn from '../atoms/cars-button/cars-btn';
import AboutUsBtn from '../atoms/about-us-button/about-us-btn';
import ContactBtn from '../atoms/contact-button/contact-btn';
import InputSearch from '../atoms/input-search/input';

function InfoHeaderTopSecond(){
    return<div className='info-Header-Top-Second'>
        <HomeBtn/>
        <CarsBtn/>
        <AboutUsBtn/>
        <ContactBtn/>
        <InputSearch/>
    </div>
}
export default InfoHeaderTopSecond;