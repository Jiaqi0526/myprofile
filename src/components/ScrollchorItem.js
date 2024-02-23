import React from "react";
import { Scrollchor } from "react-scrollchor";

const ScrollchorItem = ({ to, children, className }) => {
    return (
        <span className={className} onClick={() => document.querySelector(to).scrollIntoView({ behavior: 'smooth' })}>
            <Scrollchor to={to} animate={{ duration: 500 }} />
            {children}
        </span>
    );
};

export default ScrollchorItem;
