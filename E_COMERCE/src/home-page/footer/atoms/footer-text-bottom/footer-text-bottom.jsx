import React from 'react';
import './footer-text-bottom.css';

function TextFooterBottom() {
    return (
        <span>
            2024 AFB Cars Sales & Marketplace&nbsp;
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
                ANPC
            </a>
            ,&nbsp; {/* Add a separator and space */}
            <a href='https://gdpr-info.eu/' target="_blank" rel="noopener noreferrer">
                GDPR
            </a>
        </span>
    );
}

export default TextFooterBottom;