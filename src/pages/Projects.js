import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'AI-Powered PDF to Audio Summarizer',
    tools: 'Node.js, Express.js, OpenAI API, Google Cloud TTS, Redis, pdf-parse',
    github: 'https://github.com/sudeep-h/textToSpeechAudioBook',
    points: [
      'Developed a web application to convert uploaded PDF files into speech using Google Cloud TTS.',
      'Integrated OpenAI API to summarize extracted PDF content before conversion.',
      'Utilized pdf-parse and Node.js streams for efficient processing.',
    ],
  },
  {
    title: 'Expense Tracker App',
    tools: 'Node.js, Express.js, MongoDB, Mongoose, JWT, AWS S3, Razorpay',
    github: 'https://github.com/sudeep-h/expenseTrackerAppFinal',
    points: [
      'Implemented premium features with Razorpay Payment Gateway.',
      'Designed group expense tracking with a leaderboard system.',
      'Used AWS S3 to optimize file retrieval and storage.',
    ],
  },
  {
    title: 'Group Chat App',
    tools: 'Node.js, Express.js, MySQL, Sequelize, JWT, Socket.io, AWS S3',
    github: 'https://github.com/sudeep-h/groupchatAppFinal',
    points: [
      'Built real-time messaging with WebSocket and Socket.io.',
      'Added user discovery and friend requests.',
      'Enabled multimedia messaging and AWS S3 storage for performance.',
    ],
  },
  {
    title: 'URL Shortener',
    tools: 'Node.js, Express.js, MongoDB, JWT, Redis, Docker',
    github: 'https://github.com/sudeep-h/URL-shortener',
    points: [
      'Created a scalable API with custom aliases and analytics.',
      'Implemented topic-based grouping and rate limiting.',
      'Dockerized the app for cloud deployment.',
    ],
  },
  {
    title: 'Weather App',
    tools: 'React, OpenWeatherMap API, Bootstrap',
    github: 'https://github.com/sudeep-h/weatherApp',
    points: [
      'Fetched real-time weather data via OpenWeatherMap API.',
      'Designed responsive UI with search and forecast.',
      'Integrated weather icons and temperature units.',
    ],
  },
  {
    title: 'Currency Converter',
    tools: 'React, REST API, Bootstrap',
    github: 'https://github.com/sudeep-h/currencyConverterReactApp',
    points: [
      'Built a simple currency converter using exchange rate API.',
      'Supported conversions across global currencies.',
      'Added intuitive input fields and real-time updates.',
    ],
  },
];

function Projects() {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    >
      <Container fluid="md">
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <p className="text-center mb-5" style={{ fontSize: '1.1rem', color: darkMode ? '#ccc' : '#555' }}>
          Let’s take a look at some of the projects I’ve built 👨‍💻
        </p>

        <Row className="g-4 justify-content-center">
          {projects.map((project, idx) => (
            // <Col xs={12} md={10} lg={8} xl={7} xxl={6} key={idx}>
            <Col xs={12} sm={10} md={8} lg={6} xl={5}>

              <Card
                className={`p-4 h-100 shadow-sm border-0 rounded-4 ${
                  darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'
                }`}
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
              >
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold fs-4 text-center mb-3">
                      📌 {project.title}
                    </Card.Title>

                    <ul className="small ps-3 mb-3">
                      {project.points.map((point, i) => (
                        <li key={i} className="mb-1">{point}</li>
                      ))}
                    </ul>

                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {project.tools.split(',').map((tool, i) => (
                      <Badge
                        key={i}
                        bg={darkMode ? 'secondary' : 'light'}
                        text={darkMode ? 'light' : 'dark'}
                        className="px-3 py-2 rounded-pill small text-capitalize shadow-sm"
                        style={{
                          fontSize: '0.75rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tool.trim()}
                      </Badge>
                    ))}
                  </div>

                  </div>

                  <div className="text-center">
                    <Button
                      variant={darkMode ? 'outline-light' : 'outline-dark'}
                      size="sm"
                      href={project.github}
                      target="_blank"
                      className="d-flex align-items-center gap-2 justify-content-center"
                    >
                      <FaGithub /> View on GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        

      </Container>
    </section>
  );
}

export default Projects;
