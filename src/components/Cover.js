import React from 'react';
import './Cover.css';
import Navbar from './Navbar.js';
import Scrollchor from './ScrollchorItem.js';

const Cover = () => {
    return (
        <div className="background-image-container">

            <div className="content">
                <Navbar />
                <div className="cover-center-container">
                    <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>HI, I'M JIAQI!</h1>
                    <p style={{ fontSize: '20px' }}>Hello, world!</p>
                </div>
                <div className="arrow-down-container fall-effect">
                    <Scrollchor to="#about" className="btn">
                        <i className="fa fa-chevron-down arrow" />
                    </Scrollchor>
                </div>
            </div>

        </div>
    )
}

export default Cover
