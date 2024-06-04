import React from "react";
import './connect-with.css'
import instagram from './assets/instagram.png'


function ConnectWithAfb(){
    return <div className="connect-with-container">
        <span>Connect with AFB</span>
        <div className="connect-with-div">
        <img className="instagram-icon" src={instagram} alt='instagram-icon'/>
            <span>
            @afbcars
            </span>
        </div>
    </div>
}
export default ConnectWithAfb