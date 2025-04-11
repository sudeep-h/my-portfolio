
import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profileImage from "../assets/sudeep_img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="py-5"
      style={{
        backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
        color: darkMode ? '#f1f1f1' : '#212529',
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-down">
          About Me
        </h2>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card
              className="p-4 border-0 shadow-lg rounded-4"
              data-aos="fade-up"
              style={{
                backgroundColor: darkMode ? '#212529' : '#ffffff',  // ✅ same as resume card
                color: darkMode ? '#f1f1f1' : '#212529',
              }}
            >
              <Row className="align-items-center">
                {/* Profile Image */}
                <Col md={4} className="text-center mb-4 mb-md-0">
                  <Image
                    src={profileImage}
                    alt="Sudeep"
                    fluid
                    roundedCircle
                    className="shadow"
                    style={{ maxHeight: '220px', objectFit: 'cover' }}
                  />
                </Col>

                {/* Bio */}
                <Col md={8}>
                  <p className="mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    I'm <strong>Sudeep</strong>, a backend developer passionate about building scalable and efficient server-side applications using <strong>Node.js, Express.js, and MongoDB</strong>. With experience in developing APIs, authentication systems, and integrating cloud services like AWS and Redis, I enjoy solving complex backend challenges.
                  </p>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    My journey began in Mechanical Engineering and evolved through my role at <strong>Larsen & Toubro</strong>, where I developed strong problem-solving and project management skills. I now focus on crafting impactful digital products that improve user experiences and simplify business operations.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
