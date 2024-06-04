import React from 'react'
import './info-bottom-component.css'
import TitleBottom from '../atoms/title-bottom/title-bottom-text';
import TextBottom from '../atoms/text-bottom/text-bottom';
import VerifiedIconAndText from '../atoms/verified-icon-text/verified-icon-text';
import ResponseIconAndText from '../atoms/response-icon-text/response-icon-text';
import EffortlesIconAndText from '../atoms/effortles-icon-text/effortles-icon-text';

function InfoBottomComponent(){
    return<div className='Info-Bottom-Components'>
        <div>
            <TitleBottom/>
            <TextBottom/>
        </div>
        <div className='icons-div'>
            <VerifiedIconAndText/>
            <ResponseIconAndText/>
            <EffortlesIconAndText/>
        </div>
    </div>
}
export default InfoBottomComponent;