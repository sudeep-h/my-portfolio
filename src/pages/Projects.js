// src/pages/Projects.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const projects = [
  {
    title: 'Text-to-Audio Summarizer',
    description: 'Converts PDFs into audio summaries using Google Cloud TTS.',
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/sudeep-h/textToSpeechAudioBook',
    details: 'Built using Express, pdf-parse, and Google Cloud API for speech synthesis.'
  },
  {
    title: 'Group Chat App',
    description: 'A real-time group chat app using Node.js, Express, and WebSocket.',
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/sudeep-h/groupchatAppFinal',
    details: 'Features group messaging, user authentication, and responsive design.'
  },
  {
    title: 'Expense Tracker',
    description: 'An expense tracker app using Node.js, Express, and MongoDB',
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/sudeep-h/expenseTrackerAppFinal',
    details: 'Features group messaging, user authentication, and responsive design.'
  },
  {
    title: 'URL Shortener',
    description: 'A real-time group chat app using Node.js, Express, and WebSocket.',
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/sudeep-h/URL-shortener',
    details: 'Features group messaging, user authentication, and responsive design.'
  },
  {
    title: 'The Weather App',
    description: 'A real-time group chat app using Node.js, Express, and WebSocket.',
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/sudeep-h/weatherApp',
    details: 'Features group messaging, user authentication, and responsive design.'
  },
  {
    title: 'The Currency Converter',
    description: 'A real-time group chat app using Node.js, Express, and WebSocket.',
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/sudeep-h/currencyConverterReactApp',
    details: 'Features group messaging, user authentication, and responsive design.'
  },
  
];

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col md={6} lg={4} key={idx} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(project)}>
                  View More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProject && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProject.details}</p>
            <a href={selectedProject.github} target="_blank" rel="noreferrer">View on GitHub</a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Projects;
