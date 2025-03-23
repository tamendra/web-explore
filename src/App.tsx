import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience'; // Import the Experience component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Experience />
      
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Certifications />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}

export default App;
