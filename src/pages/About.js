// src/pages/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profileImage from '../assets/sudeep_img.png';

function About() {
  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4">
          <Image 
            src={profileImage} 
            roundedCircle 
            alt="Sudeep" 
            fluid 
          />
        </Col>
        <Col md={8}>
          <p>
            Hi, I'm Sudeep! I'm a passionate backend developer with experience in Node.js, Express, and MongoDB. I love building scalable APIs and meaningful tech that makes life easier.
          </p>
          <p>
            With a background in mechanical engineering and sales, I bring a unique problem-solving mindset and a strong work ethic to my projects. Let’s build something awesome together!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
