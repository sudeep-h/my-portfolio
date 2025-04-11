
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timeline from '../components/Timeline';
import { useTheme } from '../context/ThemeContext';
import resume from "../assets/sudeepCVNew.pdf";

const Resume = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="resume" className="py-5" style={{ backgroundColor: darkMode ? '#121212' : '#f8f9fa' }}>
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down" style={{ fontSize: '2.5rem', color: darkMode ? '#f1f1f1' : '#212529' }}>
          Resume
        </h2>

        {/* Download / View Cards */}
        <Row className="justify-content-center mb-5">
          {/* Download Card */}
          <Col xs={12} sm={6} md={5} lg={4} className="mb-4" data-aos="fade-up">
            <Card
              className={`text-center resume-card h-100 p-4 border-0 shadow-sm ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
            >
              <Card.Body>
                <Card.Title className="mb-3 fw-semibold">Download Resume</Card.Title>
                <Card.Text style={{ color: darkMode ? '#bbb' : '#6c757d', fontSize: '0.875rem' }}>
                  Get the latest PDF version of my resume
                </Card.Text>
                <Button
                  variant={darkMode ? 'outline-light' : 'primary'}
                  href={resume}
                  download
                  className="mt-3 px-4"
                >
                  <FaDownload className="me-2" />
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* View Online Card */}
          <Col xs={12} sm={6} md={5} lg={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <Card
              className={`text-center resume-card h-100 p-4 border-0 shadow-sm ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}
            >
              <Card.Body>
                <Card.Title className="mb-3 fw-semibold">View Online</Card.Title>
                <Card.Text style={{ color: darkMode ? '#bbb' : '#6c757d', fontSize: '0.875rem' }}>
                  Open in a new tab to view it directly
                </Card.Text>
                <Button
                  variant={darkMode ? 'outline-light' : 'outline-dark'}
                  href="https://drive.google.com/file/d/1eZojBXn-oGYfq7Pt56F0YZPGnkGTwOVI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 px-4"
                >
                  <FaExternalLinkAlt className="me-2" />
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Embedded Resume */}
        <Row className="justify-content-center mb-5" data-aos="fade-up">
          <Col md={10}>
            <div
              className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden"
              style={{
                border: `2px solid ${darkMode ? '#444' : '#dee2e6'}`,
                backgroundColor: darkMode ? '#1e1e1e' : '#fff',
              }}
            >
              <iframe
                src={resume}
                title="Sudeep Resume"
                style={{ border: 'none' }}
                allowFullScreen
              />
            </div>
          </Col>
        </Row>

        {/* Timeline Section */}
        <Row className="justify-content-center" data-aos="fade-up">
          <Col md={10}>
            <Timeline />
          </Col>
        </Row>
      </Container>

      <style jsx="true">{`
        .resume-card {
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .resume-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
};

export default Resume;


