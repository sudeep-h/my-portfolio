import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardBaseStyle = {
    border: 'none',
    borderRadius: '1.5rem',
    padding: '2rem',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  const cards = [
    {
      title: 'LinkedIn',
      icon: <FaLinkedin style={{ ...iconStyle, color: '#0A66C2' }} />,
      text: 'linkedin.com/in/sudeep-h',
      link: 'https://www.linkedin.com/in/sudeep-h/',
    },
    {
      title: 'Email',
      icon: <FaEnvelope style={{ ...iconStyle, color: '#d93025' }} />,
      text: 'sudeephipparge@gmail.com',
      link: 'mailto:sudeephipparge@gmail.com',
    },
    {
      title: 'Phone',
      icon: <FaPhoneAlt style={{ ...iconStyle, color: '#34A853' }} />,
      text: '+91 93534 65790',
      link: 'tel:+919353465790',
    },
    {
      title: 'WhatsApp',
      icon: <FaWhatsapp style={{ ...iconStyle, color: '#25D366' }} />,
      text: 'WhatsApp Me',
      link: 'https://wa.me/919353465790',
    },
  ];

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: darkMode ? '#121212' : '#f8f9fa' }}>
      <Container>
        <h2
          className="text-center fw-bold mb-5"
          data-aos="fade-down"
          style={{ color: darkMode ? '#f1f1f1' : '#212529' }}
        >
          Get in Touch
        </h2>

        <Row className="gy-4">
          {cards.map((card, index) => (
            <Col xs={12} sm={6} lg={3} key={card.title} data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card
                className={`shadow-sm h-100 text-center ${
                  darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
                }`}
                style={cardBaseStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div>{card.icon}</div>
                <Card.Title className="fw-semibold">{card.title}</Card.Title>
                <Card.Text>
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none fw-medium"
                    style={{
                      color: darkMode ? '#66ccff' : '#0d6efd',
                      wordBreak: 'break-word',
                    }}
                  >
                    {card.text}
                  </a>
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

