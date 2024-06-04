import React from 'react';
import './cars-name.css';
import Arrow from './assets/Arrow.png'
function CarsName(){
    return <div className='CarNameComponents'>
        <h1 className='carsNameh1'>Cars Name</h1>
        <img className='arrow-img'src={Arrow} alt='img'/>
    </div>
}
export default CarsName;