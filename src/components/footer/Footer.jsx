import React from 'react'
import EmailBox from '../email-box/EmailBox';
import './footer.css';

function Footer() {
    return (
        <div className='f-wrapper'>
            <div className="container">
                <div className="f-container">
                    <span className='title'>Get Funded Now!</span>
                    <EmailBox />
                    <span className='title' style={{
                        fontSize: '18px',
                    }}>Made With ♥ By Malek Mostafa</span>

                </div>
            </div>

        </div>
    )
}

export default Footer;
