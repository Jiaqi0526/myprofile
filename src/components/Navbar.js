import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function TopNavbar() {
  return (
    <Navbar expand="lg" className="nav-body" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="nav-brand-header" style={{ color:'white', fontSize:'35px'}}>JIAQI HU</Navbar.Brand>
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