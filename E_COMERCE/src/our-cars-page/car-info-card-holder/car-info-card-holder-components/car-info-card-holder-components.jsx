import React from 'react';
import './car-info-card-holder-components.css';
import MainImg from '../atoms/main-img/main-img';
import SecondaryImg from '../atoms/secondary-img/secondary-img';
import CarNameInfoHolder from '../atoms/car-name/car-name';
import CarYear from '../atoms/car-year/car-year';
import CarDetailsTop from '../card-details-atoms/card-details-top/card-details-top-component/card-details-top-component';
import IsHybrid from '../atoms/is-hybrid/is-hybrid';
import PriceCarCardHolder from '../atoms/price/price';
import DetailsBtn from '../atoms/details-button/details-button';
import ContactUsBtn from '../atoms/contact-button/contact-button';
import CardDetailsBottom from '../card-details-atoms/card-details-botoom/card-details-bottom-component/card-details-bottom';

function CarCardHolder({ car }) {
  const secondaryImages = car.pictures.others.slice(0, 3); // Get the first 3 images
  while (secondaryImages.length < 3) {
    secondaryImages.push(null); // Add null placeholders until we have 3 elements
  }

  return (
    <div className='car-card-holder-component'>
      <div className='img-holder'>
        <MainImg car={car} />
        <div className='secondary-img'>
          {secondaryImages.map((imgUrl, index) => (
            <SecondaryImg key={index} car={car} imgUrl={imgUrl} />
          ))}
        </div>
      </div>
      <div className='information-div'>
        <CarNameInfoHolder car={car} />
        <CarYear car={car} />
        <CarDetailsTop car={car} />
        <IsHybrid />
        <PriceCarCardHolder car={car} />
        <div className='car-card-holder-buttons-div'>
          <DetailsBtn />
          <ContactUsBtn />
        </div>
        <CardDetailsBottom car={car}/>
      </div>
    </div>
  );
}

export default CarCardHolder;