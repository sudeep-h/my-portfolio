import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar() {
  const { darkMode, setDarkMode } = useTheme();
  const location = useLocation();

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`shadow-sm py-2 ${
        darkMode ? 'navbar-dark custom-navbar-dark' : 'navbar-light bg-light'
      }`}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold"
          style={{ fontSize: '1.3rem', letterSpacing: '1px' }}
        >
          Sudeep
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/projects', label: 'Projects' },
              { path: '/skills', label: 'Skills' },
              { path: '/resume', label: 'Resume' },
              { path: '/contact', label: 'Contact' }
            ].map((link, idx) => (
              <Nav.Link
                key={idx}
                as={Link}
                to={link.path}
                className={`mx-2 ${
                  location.pathname === link.path ? 'fw-bold text-primary' : ''
                }`}
              >
                {link.label}
              </Nav.Link>
            ))}

            <Button
              onClick={toggleTheme}
              variant={darkMode ? 'outline-light' : 'outline-dark'}
              className="ms-3 d-flex align-items-center"
              style={{ fontWeight: 500 }}
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
