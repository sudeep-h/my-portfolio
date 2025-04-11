
// import React, { useEffect } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
// import { useTheme } from '../context/ThemeContext';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Footer = () => {
//   const { darkMode } = useTheme();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <footer
//       className="py-4 border-top"
//       data-aos="fade-up"
//       style={{
//         backgroundColor: darkMode ? '#1f1f1f' : '#f8f9fa',
//         color: darkMode ? '#f1f1f1' : '#212529',
//         transition: 'background-color 0.3s ease, color 0.3s ease'
//       }}
//     >
//       <Container>
//         <Row className="justify-content-between align-items-center text-center text-md-start">
//           {/* Copyright */}
//           <Col xs={12} md={4} className="mb-3 mb-md-0">
//             <p className="mb-1 fw-bold">© 2025 Sudeep H</p>
//             <small className="text-muted">All rights reserved</small>
//           </Col>

//           {/* Quick Links */}
//             <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
//               <h6 className="fw-semibold mb-2">Quick Links</h6>
//               <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0">

//               {['about', 'projects', 'skills', 'contact'].map((id) => (
//                 <li key={id}>
//                   <a
//                     href={`/${id}`}
//                     className="text-decoration-none footer-link fw-medium"
//                     style={{
//                       color: darkMode ? '#f1f1f1' : '#212529',
//                       transition: 'color 0.3s ease'
//                     }}
//                   >
//                     {id.charAt(0).toUpperCase() + id.slice(1)}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </Col>

//           {/* Social Icons */}
//             <Col xs={12} md={4} className="text-center text-md-end">
//               <h6 className="fw-semibold mb-2">Connect</h6>
//               <div className="d-flex justify-content-center justify-content-md-end gap-3">


//               {[
//                 {
//                   href: 'https://www.linkedin.com/in/sudeep-h/',
//                   icon: <FaLinkedin size={20} />
//                 },
//                 {
//                   href: 'https://github.com/sudeep-h',
//                   icon: <FaGithub size={20} />
//                 },
//                 {
//                   href: 'mailto:sudeephipparge@gmail.com',
//                   icon: <FaEnvelope size={20} />
//                 }
//               ].map(({ href, icon }, index) => (
//                 <a
//                   key={index}
//                   href={href}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     color: darkMode ? '#f1f1f1' : '#212529',
//                     transition: 'color 0.3s ease'
//                   }}
//                   className="footer-icon"
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <style jsx="true">{`
//         .footer-link:hover,
//         .footer-icon:hover {
//           color: #0d6efd !important;
//         }
//       `}</style>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className="py-4 border-top mt-auto"
      style={{
        backgroundColor: darkMode ? '#1f1f1f' : '#f8f9fa',
        color: darkMode ? '#f1f1f1' : '#212529',
        transition: 'background-color 0.3s ease, color 0.3s ease'
      }}
    >
      <Container>
        <Row className="justify-content-between align-items-center text-center text-md-start">
          
          {/* Copyright */}
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <p className="mb-1 fw-bold">© 2025 Sudeep H</p>
            <small className="text-muted">All rights reserved</small>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0">
              {['about', 'projects', 'skills', 'resume', 'contact'].map((id) => (
                <li key={id}>
                  <a
                    href={`/${id}`}
                    className="text-decoration-none footer-link fw-medium"
                    style={{
                      color: darkMode ? '#f1f1f1' : '#212529',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Social Icons */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <h6 className="fw-semibold mb-2">Connect</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {[
                {
                  href: 'https://www.linkedin.com/in/sudeep-h/',
                  icon: <FaLinkedin size={20} />
                },
                {
                  href: 'https://github.com/sudeep-h',
                  icon: <FaGithub size={20} />
                },
                {
                  href: 'mailto:sudeephipparge@gmail.com',
                  icon: <FaEnvelope size={20} />
                }
              ].map(({ href, icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                  style={{
                    color: darkMode ? '#f1f1f1' : '#212529',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx="true">{`
        .footer-link:hover,
        .footer-icon:hover {
          color: #0d6efd !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
