import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Timeline.css';

const timelineData = [
  {
    title: 'Business Development Executive – L&T',
    location: 'Hyderabad',
    date: 'Aug 2022 – Dec 2024',
    description:
      'Drove sales for L&T and Komatsu equipment, increased sales by 20%, and improved customer satisfaction with post-sales support.',
    icon: '💼'
  },
  {
    title: 'B.E. Mechanical Engineering – NIE, Mysuru',
    location: 'Mysuru',
    date: 'Aug 2018 – Jul 2022',
    description: 'Graduated with a degree in Mechanical Engineering.',
    icon: '🎓'
  },
  {
    title: 'Class 12 – Sainik School Bijapur',
    location: 'Bijapur',
    date: 'Jun 2017 – May 2018',
    description: 'Completed high school under CBSE curriculum.',
    icon: '🏫'
  }
];

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-5">Experience & Education</h2>
      <div className="timeline">
        {timelineData.map((item, idx) => (
          <div className="timeline-item" data-aos="fade-up" key={idx}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h5>{item.title}</h5>
              <small className="text-muted">{item.location} | {item.date}</small>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Timeline;
