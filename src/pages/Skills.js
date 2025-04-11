import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  SiJavascript, SiTypescript, SiPython, SiMysql,
  SiNodedotjs, SiExpress, SiReact,
  SiHtml5, SiCss3, SiJenkins, SiPostman, SiIntellijidea, SiGit
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { useTheme } from '../context/ThemeContext';

const groupedSkills = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" size={40} /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" size={40} /> },
      { name: 'Java', icon: <DiJava color="#f89820" size={40} /> },
      { name: 'Python', icon: <SiPython color="#3776ab" size={40} /> },
      { name: 'SQL', icon: <SiMysql color="#00758f" size={40} /> },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#68a063" size={40} /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" size={40} /> },
      { name: 'React', icon: <SiReact color="#61dafb" size={40} /> },
    ]
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'HTML', icon: <SiHtml5 color="#e34c26" size={40} /> },
      { name: 'CSS', icon: <SiCss3 color="#264de4" size={40} /> },
      { name: 'REST APIs', icon: <span style={{ fontSize: 40 }}>🌐</span> },
      { name: 'Jenkins', icon: <SiJenkins color="#d33833" size={40} /> },
      { name: 'AWS', icon: <FaAws color="#ff9900" size={40} /> },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit color="#f34f29" size={40} /> },
      { name: 'IntelliJ', icon: <SiIntellijidea color="#000000" size={40} /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" size={40} /> },
    ]
  }
];

function Skills() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="skills"
      className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    >
      <Container>
        <h2
          className="text-center fw-bold mb-5"
          data-aos="fade-down"
          style={{ fontSize: '2.5rem' }}
        >
          Skills
        </h2>

        {groupedSkills.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-5">
            <h4
              className={`mb-4 ${darkMode ? 'text-info' : 'text-primary'}`}
              data-aos="fade-right"
            >
              {group.title}
            </h4>

            <Row>
              {group.skills.map((skill, idx) => (
                <Col xs={6} sm={4} md={3} key={idx} className="mb-4" data-aos="zoom-in">
                  <Card
                    className={`text-center skill-card border-0 shadow-sm p-3 h-100 ${
                      darkMode ? 'bg-secondary text-light' : 'bg-white text-dark'
                    }`}
                  >
                    <div className="mb-3">{skill.icon}</div>
                    <Card.Body className="p-0">
                      <Card.Title className="fs-6">{skill.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>

      <style jsx="true">{`
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 16px;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
}

export default Skills;
