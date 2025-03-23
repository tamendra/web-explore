import React from "react";
import { TypingText } from "./Typingtext";
import developerImage from "../assets/logo512.png"; // Ensure correct path

const Hero: React.FC = () => {
  return (
    <header className="App-hero">
      <div className="App-hero-content">
        {/* Title with Typing Animation */}
        <h1 className="App-title">
          <TypingText text="Hi, I'm Tamendra Kumar Sahu" />
        </h1>

        {/* Profile Image */}
        <div className="App-hero-image">
          <img src={developerImage} alt="Tamendra Kumar Sahu - Software Developer" />
        </div>

        {/* Subtitle */}
        <p className="App-subtitle">
          <TypingText text="Software Developer | Crafting Scalable & Secure Systems" />
        </p>

        {/* CTA Buttons */}
        <div className="App-hero-buttons">
          <a href="#about" className="App-cta">
            Learn More About Me
          </a>
          <a href="#projects" className="App-cta">
            Explore My Projects
          </a>
          <a href="#contact" className="App-cta">
            Let’s Connect!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
