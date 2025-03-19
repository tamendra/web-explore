import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <header className="App-hero">
        <div className="App-hero-content">
          <h1 className="App-title">Hi, I'm Tamendra Sahu</h1>
          <p className="App-subtitle">
            Backend Developer | Building Scalable and Secure Systems
          </p>
          <a href="#projects" className="App-cta">
            View My Work
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="App-section" id="about">
        <h2>About Me</h2>
        <p>
          I'm a backend developer with expertise in Node.js, Python, and database management. I enjoy solving complex
          problems and creating systems that are robust, scalable, and efficient. With experience in microservices
          architecture and cloud technologies, I aim to deliver high-quality backend solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="App-section" id="skills">
        <h2>Skills</h2>
        <div className="App-skills">
          <span>Node.js</span>
          <span>Python</span>
          <span>RESTful APIs</span>
          <span>SQL & NoSQL Databases</span>
          <span>Docker & Kubernetes</span>
          <span>Microservices Architecture</span>
          <span>Cloud Computing (AWS, Azure)</span>
          <span>CI/CD Pipelines</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="App-section" id="projects">
        <h2>Projects</h2>
        <div className="App-projects">
          <div className="App-project-card">
            <h3>API for E-commerce Platform</h3>
            <p>
              Designed and implemented a scalable API for an e-commerce platform, handling thousands of requests per
              second.
            </p>
          </div>
          <div className="App-project-card">
            <h3>Real-time Chat Application Backend</h3>
            <p>
              Built a real-time chat backend using WebSocket and Node.js, ensuring low latency and high reliability.
            </p>
          </div>
          <div className="App-project-card">
            <h3>Data Pipeline for Analytics</h3>
            <p>
              Developed a data pipeline to process and analyze large datasets, improving business decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="App-section" id="testimonials">
        <h2>Testimonials</h2>
        <div className="App-testimonials">
          <blockquote>
            "Tamendra is an exceptional backend developer who consistently delivers high-quality solutions. His ability
            to solve complex problems is unmatched." - Client A
          </blockquote>
          <blockquote>
            "Working with Tamendra was a pleasure. His expertise in microservices and cloud technologies helped us
            scale our platform seamlessly." - Client B
          </blockquote>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="App-section" id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Certified Kubernetes Administrator (CKA)</li>
          <li>AWS Certified Solutions Architect</li>
          <li>Microsoft Certified: Azure Developer Associate</li>
        </ul>
      </section>

      {/* Blog Section */}
      <section className="App-section" id="blog">
        <h2>Blog</h2>
        <div className="App-blog">
          <div className="App-blog-post">
            <h3>Understanding Microservices Architecture</h3>
            <p>
              A deep dive into the principles of microservices and how they can help build scalable applications.
            </p>
            <a href="#read-more">Read More</a>
          </div>
          <div className="App-blog-post">
            <h3>Optimizing APIs for Performance</h3>
            <p>
              Tips and techniques for building high-performance APIs that can handle thousands of requests per second.
            </p>
            <a href="#read-more">Read More</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="App-footer">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out via email:{" "}
          <a href="mailto:sahutamendra@gmail.com">sahutamendra@gmail.com</a>
        </p>
        <p>
          Connect with me on LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/tamendra-sahu/" target="_blank" rel="noopener noreferrer">
            Tamendra Sahu
          </a>
        </p>
        <p>© 2025 Tamendra Sahu Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
