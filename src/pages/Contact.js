import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from '../context/ThemeContext';
import { FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const { darkMode } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted! (You can integrate Formspree or EmailJS)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container
      className={`my-5 py-5 px-4 rounded shadow ${
        darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
      }`}
      data-aos="fade-up"
    >
      <h2 className="text-center mb-4">Contact Me</h2>

      {/* Contact Form */}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant={darkMode ? 'light' : 'primary'} type="submit">
            Send Message
          </Button>
        </div>
      </Form>

      {/* Contact Options */}
      <Row className="mt-5 text-center" data-aos="fade-up">
        <h4 className="mb-4">Or connect with me directly:</h4>

        {/* LinkedIn */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <div className={`p-3 border rounded shadow-sm h-100 ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`}>
            <h5 className="d-flex justify-content-center align-items-center gap-2">
              <FaLinkedin /> Connect on LinkedIn
            </h5>
            <p>Let’s grow our network!</p>
            <Button
              variant="primary"
              href="https://www.linkedin.com/in/sudeep-h/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </div>
        </Col>

        {/* Email */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <div className={`p-3 border rounded shadow-sm h-100 ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`}>
            <h5 className="d-flex justify-content-center align-items-center gap-2">
              <FaEnvelope /> Mail Me
            </h5>
            <p>Drop me a message anytime.</p>
            <Button
              variant="success"
              href="mailto:sudeephipparge@gmail.com"
            >
              Email
            </Button>
          </div>
        </Col>

        {/* Phone */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <div className={`p-3 border rounded shadow-sm h-100 ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`}>
            <h5 className="d-flex justify-content-center align-items-center gap-2">
              <FaPhone /> Call Me
            </h5>
            <p>Available for a quick chat.</p>
            <Button
              variant="info"
              href="tel:+919353465790"
            >
              Call
            </Button>
          </div>
        </Col>

        {/* WhatsApp */}
        <Col xs={12} md={6} lg={3} className="mb-4">
          <div className={`p-3 border rounded shadow-sm h-100 ${darkMode ? 'bg-secondary text-white' : 'bg-white'}`}>
            <h5 className="d-flex justify-content-center align-items-center gap-2">
              <FaWhatsapp /> Ping Me
            </h5>
            <p>Say hi on WhatsApp 👋</p>
            <Button
              variant="success"
              href="https://wa.me/919353465790"
              target="_blank"
            >
              WhatsApp
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
