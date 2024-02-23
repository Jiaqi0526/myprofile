import React, { useState, useEffect, useRef  } from 'react';
import './AboutMe.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About_me = () => {
  const [isVisible_about, setIsVisible_about] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer_about = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible_about(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer_about.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer_about.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div id="about" ref={aboutRef} className={`About_me ${isVisible_about ? 'fadeinup about-container' : 'about-container-none'}`}>
      <h2 className="about-me-text">ABOUT ME</h2>
      <div className="about-info-section">
        <div className="about-info-selfimg-container">
          <Image src="/images/id_photo.png" roundedCircle style={{ maxWidth: '400px', maxHeight: '400px' }} />
        </div>
        <div className="about-info-text-container">
          <Container>
            <Row>
              <h2>What I hope to do</h2>
              <p>My mission as a developer is to contribute to applications that empower and improve lives.
                Yes, let's change the world together!</p>
            </Row>
            <Row>
              <h2>What I'm doing</h2>
              <p>I recently shared all of the resources and strategies I used to land many software engineer interviews.</p>
            </Row>
            <Row >
              <h2>Skills</h2>
            </Row>
            <Row>
              <Col ><h5>Languages</h5></Col>
              <Col><h5>Frames</h5></Col>
              <Col><h5>Tools</h5></Col>
            </Row>
            <Row>
              <Col style={{ borderRight: '2px solid gray' }}>
                <p>Java, Python, JavaScript</p>
              </Col >
              <Col style={{ borderRight: '2px solid gray' }}>
                <p>React, Node.js</p>
              </Col>
              <Col >
                <p>Git</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default About_me
