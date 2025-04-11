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

const groupedSkills = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: <SiJavascript color="#f7df1e" size={32} /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178c6" size={32} /> },
      { name: 'Java', icon: <DiJava color="#f89820" size={32} /> },
      { name: 'Python', icon: <SiPython color="#3776ab" size={32} /> },
      { name: 'SQL', icon: <SiMysql color="#00758f" size={32} /> },
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs color="#68a063" size={32} /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" size={32} /> },
      { name: 'React', icon: <SiReact color="#61dafb" size={32} /> },
    ]
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'HTML', icon: <SiHtml5 color="#e34c26" size={32} /> },
      { name: 'CSS', icon: <SiCss3 color="#264de4" size={32} /> },
      { name: 'REST APIs', icon: <span style={{ fontSize: 32 }}>🌐</span> },
      { name: 'Jenkins', icon: <SiJenkins color="#d33833" size={32} /> },
      { name: 'AWS', icon: <FaAws color="#ff9900" size={32} /> },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <SiGit color="#f34f29" size={32} /> },
      // { name: 'VS Code', icon: <SiVscode color="#007acc" size={32} /> },
      { name: 'IntelliJ', icon: <SiIntellijidea color="#000000" size={32} /> },
      { name: 'Postman', icon: <SiPostman color="#ff6c37" size={32} /> },
    ]
  }
];

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4">Skills</h2>
      {groupedSkills.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-5">
          <h4 className="mb-4">{group.title}</h4>
          <Row>
            {group.skills.map((skill, idx) => (
              <Col xs={6} md={4} lg={3} key={idx} className="mb-3" data-aos="zoom-in">
                <Card className="text-center h-100 border-0 shadow-sm p-3 skill-card">
                  <div className="mb-2">{skill.icon}</div>
                  <Card.Body>
                    <Card.Title className="fs-6">{skill.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default Skills;
