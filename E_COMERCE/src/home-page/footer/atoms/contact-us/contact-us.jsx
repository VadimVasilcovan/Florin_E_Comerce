import React from "react";
import './contact-us.css';
import phone from './assets/phone.png'

function ContactUs(){
    return <div className="contact-us-container">
        <span>Contact us</span>
        <div className="phone-icon-text-div">
            <img className="phone-icon" src={phone} alt='phone-icon'/>
            <span>
            +40 722 213 593
            </span>
        </div>
    </div>
}
export default ContactUs