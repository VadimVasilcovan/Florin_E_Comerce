import React from 'react';
import './footer-component.css'
import ContactUs from '../atoms/contact-us/contact-us';
import WhereYouCanFind from '../atoms/where-you-can-find/where-you-can-find';
import ConnectWithAfb from '../atoms/connect-with/connect-with';
import TextFooterBottom from '../atoms/footer-text-bottom/footer-text-bottom';

function FooterComponent(){
    return (
        <div className='footer-container'>
            <div className='footer-info-div'>
                <ContactUs />
                <WhereYouCanFind />
                <ConnectWithAfb />
            </div>
            <hr className='hr-footer' /> {/* Ensure <hr> is placed here */}
            <div className='footer-bottom'>
                <TextFooterBottom />
            </div>
            
        </div>
    );
}

export default FooterComponent;