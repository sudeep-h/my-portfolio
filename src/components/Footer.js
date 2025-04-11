import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-4 mt-5 shadow-sm ${
        darkMode ? 'custom-footer-dark text-light' : 'bg-light text-dark'
      }`}
    >
      <Container>
        <Row className="text-center text-md-start align-items-center">
          {/* Name & Year */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h6 className="mb-0 fw-semibold">© {new Date().getFullYear()} Sudeep H</h6>
            <small className="text-muted">All rights reserved</small>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 mb-0">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col xs={12} md={4}>
            <h6 className="fw-semibold mb-2">Connect</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://www.linkedin.com/in/sudeep-h/" target="_blank" rel="noreferrer" className="footer-icon">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/sudeep-h" target="_blank" rel="noreferrer" className="footer-icon">
                <FaGithub size={20} />
              </a>
              <a href="mailto:sudeephipparge@gmail.com" className="footer-icon">
                <FaEnvelope size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
