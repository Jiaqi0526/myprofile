import React from 'react';
import './Cover.css';
import Navbar from './Navbar.js';

const Cover = () => {
    return (
        <div className="background-image-container">
            <div className="content">
                <Navbar />
                <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>HI, I'M JIAQI!</h1>
                <p style={{ fontSize: '20px' }}>Hello, world!</p>
            </div>
        </div>
    )
}

export default Cover
