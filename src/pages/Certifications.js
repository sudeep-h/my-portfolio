
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTheme } from '../context/ThemeContext';
import { FaExternalLinkAlt } from 'react-icons/fa';
import postman1 from "../assets/certificates/postman1.jpg";
import genAI from "../assets/certificates/genAI.png";
import postman2 from "../assets/certificates/postmanBadge.png";
import jsIntermediate from "../assets/certificates/jsIntHackerRank.jpg";
import sqlOracle from "../assets/certificates/sqlOracle.jpg";
import jsBasic from "../assets/certificates/jsBasicHackerRank.jpg";
import sqlBasic from "../assets/certificates/sqlBasicHackerRank.jpg";
import coursera1 from "../assets/certificates/Coursera1.jpg";
import coursera2 from "../assets/certificates/Coursera2.jpg";
import coursera3 from "../assets/certificates/Coursera3.jpg";
import powerBI from "../assets/certificates/powerBI.png";

const certifications = [
  {
    title: 'API Beginner Learning Path',
    organization: 'Postman Academy',
    date: 'November 2024',
    image: postman1,
    link: 'https://verify.skilljar.com/c/q8t69659hnyp',
  },
  {
    title: 'Introduction to Generative AI',
    organization: 'Google Cloud',
    date: 'November 2024',
    image: genAI,
    link: 'https://example.com/certificate-mongodb',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    organization: 'Postman',
    date: 'November 2024',
    image: postman2,
    link: 'https://badgr.com/public/assertions/1tKmGkqHTl-xNMaNHNYIaQ?identity__email=sudeephipparge@gmail.com',
  },
  {
    title: 'JavaScript (Basic)',
    organization: 'HackerRank',
    date: 'June 2023',
    image: jsBasic,
    link: 'https://www.hackerrank.com/certificates/41c88b1f08b9',
  },
  {
    title: 'JavaScript (Intermediate)',
    organization: 'HackerRank',
    date: 'October 2024',
    image: jsIntermediate,
    link: 'https://www.hackerrank.com/certificates/b7f86b51d9d3',
  },
  {
    title: 'SQL (Basic)',
    organization: 'HackerRank',
    date: 'June 2024',
    image: sqlBasic,
    link: 'https://www.hackerrank.com/certificates/ee7f71a690ef',
  },
  {
    title: 'Database for Developers: Fundamentals',
    organization: 'Oracle',
    date: 'October 2024',
    image: sqlOracle,
    link: 'https://www.linkedin.com/in/sudeep-h/details/certifications/1730050710588/single-media-viewer/?profileId=ACoAADSDz1QBgUkoQWmmV8fQ8ISw6GjIYCAsDGs',
  },
  {
    title: 'Ask Questions to Make Data-Driven Decisions(Google Data Analytics)',
    organization: 'Coursera',
    date: 'December 2022',
    image: coursera1,
    link: 'https://www.coursera.org/account/accomplishments/certificate/KK5KPCXAKCFC',
  },
  {
    title: 'Foundations: Data, Data, Everywhere (Google Data Analytics)',
    organization: 'Coursera',
    date: 'December 2022',
    image: coursera2,
    link: 'https://www.coursera.org/account/accomplishments/certificate/R7TGK8PWK62L',
  },
  {
    title: 'Prepare Data for Exploration (Google Data Analytics)',
    organization: 'Coursera',
    date: 'December 2022',
    image: coursera3,
    link: 'https://www.coursera.org/account/accomplishments/certificate/3RNE3U96D3ZG',
  },
  {
    title: 'Power BI for Beginners',
    organization: 'Simplilearn',
    date: 'December 2022',
    image: powerBI,
    link: 'https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDA1NTg5NF8xNjcyNTA1MjA5LnBuZyIsInVzZXJuYW1lIjoiU3VkZWVwIEhpcHBhcmdlIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4211%2FPower-BI-for-Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=853283776038442712&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVLy0zqMw2KUpJKU%2ByrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDANEXNGRBAAAA',
  },
];

function Certifications() {
  const { darkMode } = useTheme();

  return (
    <section id="certifications" className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Certifications</h2>

        {certifications.map((cert, idx) => (
          <Row key={idx} className="justify-content-center mb-4">
            <Col xs={12} md={10} lg={8}>
              <Card
                className={`p-3 shadow-sm border-0 rounded-4 ${
                  darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'
                }`}
                style={{
                  minHeight: '450px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0px)')}
              >
                <Card.Body className="d-flex flex-column align-items-center text-center">
                  <Card.Title className="fw-bold fs-5 mb-3">{cert.title}</Card.Title>

                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="img-fluid rounded shadow-sm mb-3"
                    style={{
                      maxHeight: '200px',
                      objectFit: 'contain',
                      width: '100%',
                    }}
                  />

                  <Card.Subtitle className="text-muted mb-1 small">{cert.organization}</Card.Subtitle>
                  <p className="small mb-3">{cert.date}</p>

                  <Button
                    variant={darkMode ? 'outline-light' : 'outline-dark'}
                    size="sm"
                    href={cert.link}
                    target="_blank"
                    className="d-flex align-items-center gap-2 justify-content-center mt-auto"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Certifications;
