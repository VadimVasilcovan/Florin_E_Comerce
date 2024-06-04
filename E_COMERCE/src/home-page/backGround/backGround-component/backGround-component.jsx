import React from 'react';
import './backGround-component.css';
import BackGroundTxt from '../atoms/background-txt/background-txt';
import SeeCarsBtn from '../atoms/see-cars-btn/see-cars-btn';
import BackGroundIMG from '../atoms/backGround-img/backGround-img';

function BackGroundComponents() {
    return (
        <div className='backGround'>
            <div className='size'>
                <div className='container-div'>
                    <BackGroundTxt />
                    <SeeCarsBtn />
                </div>
                <BackGroundIMG />
            </div>
        </div>
    );
}

export default BackGroundComponents;