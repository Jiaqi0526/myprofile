import React from 'react';
import './Cover.css';
import Navbar from './Navbar.js';
// import { Scrollchor } from "react-scrollchor";

const Cover = () => {
    return (
        <div className="background-image-container">
            <div className="content">
                <Navbar />
                <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>HI, I'M JIAQI!</h1>
                <p style={{ fontSize: '20px' }}>Hello, world!</p>
            </div>
            {/* <div className="arrow animated bounceInDown">
                <Scrollchor to="#about" className="btn" animate={{ duration: 500 }}>
                    <i className="fa fa-chevron-down" />
                </Scrollchor>
            </div> */}
        </div>
    )
}

export default Cover
