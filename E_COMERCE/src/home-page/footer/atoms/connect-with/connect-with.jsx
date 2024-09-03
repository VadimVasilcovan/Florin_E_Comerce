import React from "react";
import './connect-with.css'
import instagram from './assets/instagram.png'


function ConnectWithAfb(){
    return <div className="connect-with-container">
        <span>Connect with AFB</span>
        <div className="connect-with-div">
        
            <span className="spanu">
                <img className="instagram-icon" src={instagram} alt='instagram-icon'/>
                <a target="_blank" className="anchor" href="https://www.instagram.com/afbcars/?utm_source=ig_web_button_share_sheet"> @afbcars</a>
           
            </span>
        </div>
    </div>
}
export default ConnectWithAfb