// import { useState } from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';
// import { FaSun, FaMoon } from 'react-icons/fa';

// function CustomNavbar() {
//   const { darkMode, setDarkMode } = useTheme();
//   const location = useLocation();
//   const [expanded, setExpanded] = useState(false); 

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/projects', label: 'Projects' },
//     { path: '/skills', label: 'Skills' },
//     { path: '/resume', label: 'Resume' },
//     { path: '/contact', label: 'Contact' }
//   ];

//   const handleNavClick = () => setExpanded(false); // <-- collapse on link click

//   return (
//     <Navbar
//       expand="lg"
//       expanded={expanded} // controlled mode
//       fixed="top"
//       className={`py-2 shadow-sm ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}
//     >
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="fw-bold" onClick={handleNavClick}>
//           Sudeep
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto align-items-center">
//             {navLinks.map((link, idx) => (
//               <Nav.Link
//                 key={idx}
//                 as={Link}
//                 to={link.path}
//                 onClick={handleNavClick}
//                 className={`mx-2 ${location.pathname === link.path ? 'fw-bold text-primary' : ''}`}
//               >
//                 {link.label}
//               </Nav.Link>
//             ))}

//             <Button
//               onClick={() => setDarkMode((prev) => !prev)}
//               variant={darkMode ? 'outline-light' : 'outline-dark'}
//               className="ms-3 px-3 rounded-pill"
//             >
//               {darkMode ? <FaSun /> : <FaMoon />}
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default CustomNavbar;

import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function CustomNavbar() {
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    {path: '/certifications', label: 'Certifications'},
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleNavClick = () => {
    setExpanded(false); // Collapse menu after clicking
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      fixed="top"
      className={`py-2 shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}
      style={{
        transition: 'background-color 0.3s ease, color 0.3s ease',
        zIndex: 1050
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={handleNavClick}
          className={`fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}
        >
          Sudeep
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navLinks.map(({ path, label }, idx) => (
              <Nav.Link
                as={Link}
                key={idx}
                to={path}
                onClick={handleNavClick}
                className={`mx-2 ${location.pathname === path ? 'fw-bold text-primary' : darkMode ? 'text-light' : 'text-dark'}`}
                style={{ transition: 'color 0.3s ease' }}
              >
                {label}
              </Nav.Link>
            ))}

            <Button
              onClick={() => setDarkMode(prev => !prev)}
              variant={darkMode ? 'outline-light' : 'outline-dark'}
              className="ms-3 px-3 rounded-pill d-flex align-items-center"
              style={{ transition: 'all 0.3s ease' }}
            >
              {darkMode ? <FaSun className="me-2" /> : <FaMoon className="me-2" />}
              {darkMode ? 'Light' : 'Dark'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
