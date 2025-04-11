import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Container className="text-center">
        <h1>Hello, I'm <span style={{ color: '#0dcaf0' }}>Sudeep </span></h1>
        <h2>
          <Typewriter
            words={['Backend Developer', 'MERN Stack Enthusiast', 'Creative Coder']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="mt-4">Welcome to my interactive portfolio! 🚀</p>
      </Container>
    </div>
  );
}

export default Home;
