import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';
import svgImage from '../assets/undraw_programming_65t2.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="d-flex align-items-center py-5"
      style={{
        backgroundColor: darkMode ? '#121212' : '#fefefe',
        color: darkMode ? '#f8f9fa' : '#212529',
        transition: 'background-color 0.4s ease, color 0.4s ease'
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left: Text Section */}
          <Col md={6} data-aos="fade-right" className="text-center text-md-start">
            <h1 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
              Hi, I'm <span className="text-primary">Sudeep <span className="wave">👋</span></span>
            </h1>
            <h4 className="mb-4" style={{ fontSize: '1.6rem' }}>
              I'm a&nbsp;
              <span className="text-info">
                <Typewriter
                  words={['Backend Developer', 'Node.js Enthusiast', 'Tech Explorer']}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h4>
            <p className="mb-4 mx-auto mx-md-0" style={{ maxWidth: '500px', fontSize: '1rem' }}>
              Passionate about building efficient, scalable backend systems using Node.js, Express, and MongoDB.
              Let’s build something awesome together!
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
              <Button
                href="https://drive.google.com/file/d/1eZojBXn-oGYfq7Pt56F0YZPGnkGTwOVI/view?usp=sharing"
                variant={darkMode ? 'outline-light' : 'primary'}
                className="rounded-pill px-4 py-2"
                style={{ fontSize: '1rem' }}
              >
                View Resume
              </Button>
              <Button
                href="/contact"
                variant={darkMode ? 'light' : 'outline-dark'}
                className="rounded-pill px-4 py-2"
                style={{ fontSize: '1rem' }}
              >
                Contact Me
              </Button>
            </div>
          </Col>

          {/* Right: Image */}
          <Col md={6} className="text-center mt-5 mt-md-0" data-aos="fade-left">
            <img
              src={svgImage}
              alt="Programming"
              className="img-fluid"
              style={{
                maxHeight: '360px',
                borderRadius: '20px',
                boxShadow: darkMode
                  ? '0 0 20px rgba(255,255,255,0.1)'
                  : '0 0 20px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.4s ease'
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
