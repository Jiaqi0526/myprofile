import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function TopNavbar() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navScrollStyle = {
        backgroundColor: `rgba(255, 255, 255, ${scrollY > 100 ? 0.9 : 0})`,
        color: scrollY > 100 ? "rgb(88, 150, 237)" : "white",
        transition: "background-color 0.4s ease",
    };

    const navBrandStyle = {
        color: scrollY > 100 ? "rgb(88, 150, 237)" : "white",
        transition: "background-color 0.4s ease",
        fontSize: "30px"
    };

    return (
        <Navbar expand="lg" className="nav-body" style={navScrollStyle} fixed="top">
            <Container fluid>
                <Navbar.Brand href="#home" className="nav-brand-header" style={navBrandStyle}>JIAQI HU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <span className="nav-link-header">ABOUT ME</span>
                        <span className="nav-link-header">PROJECTS</span>
                        <span className="nav-link-header">CONTACTS</span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;