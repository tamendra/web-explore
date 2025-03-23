import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="App-footer" id="contact">
      <div className="App-footer-links">
        <a href="tel:+917771942138" className="App-footer-link">
          <>{FaPhoneAlt({ className: "App-footer-icon" })}</>
          <span>+91 7771942138</span>
        </a>
        <a href="mailto:sahutamendra@gmail.com" className="App-footer-link">
          <>{FaEnvelope({ className: "App-footer-icon" })}</>
          <span>sahutamendra@gmail.com</span>
        </a>
        <a
          href="https://linkedin.com/in/tamendra-sahu/"
          target="_blank"
          rel="noopener noreferrer"
          className="App-footer-link"
        >
          <>{FaLinkedin({ className: "App-footer-icon" })}</>
          <span>tamendra-sahu</span>
        </a>
        <a
          href="https://github.com/tamendra"
          target="_blank"
          rel="noopener noreferrer"
          className="App-footer-link"
        >
          <>{FaGithub({ className: "App-footer-icon" })}</>
          <span>tamendra</span>
        </a>
      </div>
      <p>© 2025 Tamendra Kumar Sahu</p>
    </footer>
  );
};

export default Footer;
