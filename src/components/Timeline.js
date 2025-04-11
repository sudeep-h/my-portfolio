
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Timeline.css';
import { useTheme } from '../context/ThemeContext';

import lntLogo from '../assets/logos/lntLogo.png';
import nieLogo from '../assets/logos/nieLogo.png';
import ssbLogo from '../assets/logos/ssbjLogo.png';

const timelineData = [
  {
    title: 'Larsen & Toubro Ltd',
    company: 'Business Development Executive',
    location: 'Hyderabad',
    date: 'Aug 2022 – Dec 2024',
    description:
      'Drove sales for L&T and Komatsu equipment, increased sales by 20%, and improved customer satisfaction with post-sales support.',
    logo: lntLogo,
  },
  {
    title: 'The National Institute Of Engineering',
    company: 'Bachelor of Engineering',
    location: 'Mysuru',
    date: 'Aug 2018 – Jul 2022',
    description: 'CGPA - 9',
    logo: nieLogo,
  },
  {
    title: 'Sainik School Bijapur',
    company: 'Class XII',
    location: 'Bijapur',
    date: 'Jun 2017 – May 2018',
    description: 'Percentage - 91%',
    logo: ssbLogo,
  }
];

function Timeline() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Container className="mt-5 pt-5">
      <h2 className={`text-center mb-5 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
        Experience & Education
      </h2>

      <div className="timeline">
        {timelineData.map((item, idx) => (
          <div className="timeline-item mb-4" data-aos="fade-up" key={idx}>
            <div
              className="timeline-content d-flex align-items-start gap-3 shadow-sm p-4 rounded-4"
              style={{
                backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
                color: darkMode ? '#f1f1f1' : '#212529',
                border: `1px solid ${darkMode ? '#333' : '#dee2e6'}`,
              }}
            >
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="timeline-logo"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '12px',
                  objectFit: 'contain',
                  backgroundColor:'#f8f9fa',
                  padding: '6px',
                  alignSelf: 'center', 
                  flexShrink: 0,    
                }}
              />

              <div>
                {/* First line: Institution or Company Name */}
                <h5 className="fw-bold mb-1">{item.title}</h5>

                {/* Second line: Role or Degree */}
                <p
                  className="fw-medium mb-1"
                  style={{ fontSize: '1rem', color: darkMode ? '#ccc' : '#333' }}
                >
                  {item.company}
                </p>

                {/* Third line: Location & Dates */}
                <small
                  className="d-block mb-2"
                  style={{ color: darkMode ? '#aaa' : '#6c757d' }}
                >
                  {item.location} | {item.date}
                </small>

                {/* Fourth line: Description */}
                <p className="mb-0" style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .timeline-content:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 576px) {
          .timeline-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .timeline-logo {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Timeline;
