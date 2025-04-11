import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timeline from '../components/Timeline';
import { useTheme } from '../context/ThemeContext'; // 👈 import theme hook

const Resume = () => {
  const { darkMode } = useTheme(); // 👈 get darkMode from context

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container
      className={`my-5 text-center rounded py-4 ${
        darkMode ? 'text-light bg-dark' : 'text-dark bg-light'
      }`}
    >
      <h2 className="mb-4 display-5" data-aos="fade-down">Resume</h2>

      {/* Resume Actions */}
      <Row className="justify-content-center mb-5">
        {/* Download Resume Card */}
        <Col xs={10} sm={8} md={5} lg={4} className="mb-4" data-aos="fade-up">
          <Card className={`shadow-sm h-100 ${darkMode ? 'bg-secondary text-white' : ''}`}>
            <Card.Body>
              <Card.Title className="h5">Download My Resume</Card.Title>
              <Card.Text>
                Click below to download the PDF version of my resume.
              </Card.Text>
              <Button
                variant={darkMode ? 'light' : 'primary'}
                href="/assets/resume.pdf"
                download
                className="mt-2"
              >
                <FaDownload className="me-2" />
                Download
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* View Online Card */}
        <Col xs={10} sm={8} md={5} lg={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
          <Card className={`shadow-sm h-100 ${darkMode ? 'bg-secondary text-white' : ''}`}>
            <Card.Body>
              <Card.Title className="h5">View Online</Card.Title>
              <Card.Text>
                Open my resume in a new tab to view it online.
              </Card.Text>
              <Button
                variant={darkMode ? 'light' : 'success'}
                href="https://example.com/online-resume"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2"
              >
                <FaExternalLinkAlt className="me-2" />
                View Online
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Timeline Section */}
      <Row className="justify-content-center">
        <Col md={10}>
          <div data-aos="fade-up">
            <Timeline />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
