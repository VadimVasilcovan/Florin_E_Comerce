import React from 'react';
import './response-icon-text.css';
import message from './assets/message.png'
function ResponseIconAndText(){
    return <div className="response-container">
    <img className='response-icon' src={message} alt='message-icon' />
    <p>Fast Response</p>
  </div>
}
export default ResponseIconAndText;