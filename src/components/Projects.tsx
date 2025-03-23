import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "AI-Powered Resume Screening System",
    duration: "May 2022 - Present",
    description:
      "Developed a high-performance AI-based search engine for an Applicant Tracking System (ATS), improving hiring efficiency by 30%. Also integrated secure API endpoints for seamless communication between search and external platforms.",
    skills: ["Node.js", "TypeScript", "Elasticsearch", "Microservices", "CI/CD", "API Development", "Security"],
    tech_stack: ["Node.js", "Express.js", "TypeScript", "Elasticsearch", "Kibana", "Redis"],
    role: "Backend Developer – Designed scalable search APIs and secure authentication mechanisms.",
    results: "Reduced job/candidate search time by 30%, improved match accuracy by 20%, enhanced API security.",
    challenges_solved: "Optimized Elasticsearch queries and implemented OAuth2 authentication for API access.",
    future_improvements: ["Enhancing AI-based search ranking", "Expanding API monitoring and analytics"],
  },
  {
    name: "ATS Workflow Optimization & Performance Enhancement",
    duration: "May 2022 - Present",
    description:
      "Redesigned ATS workflows, improving efficiency in requirement approvals, job creation, and candidate engagement. Optimized database queries and microservices architecture to enhance system scalability.",
    skills: ["Node.js", "TypeScript", "Express.js", "Microservices", "MySQL", "MongoDB", "Elasticsearch", "Security"],
    tech_stack: ["Node.js", "Express.js", "MySQL", "MongoDB", "Elasticsearch", "AWS S3"],
    role: "Backend Engineer – Led API development, database optimization, and system security improvements.",
    results: "Increased ATS efficiency, reducing data retrieval time by 25% and boosting recruiter productivity.",
    challenges_solved: "Replaced inefficient SQL queries with optimized indexing strategies and secured system APIs.",
    future_improvements: ["Implementing AI-driven workflow suggestions", "Expanding system analytics and reporting"],
  },
  {
    name: "Data Migration and Admin Tool Development",
    duration: "May 2022 - Present",
    description:
      "Developed data migration scripts and an admin panel to facilitate seamless client onboarding, reducing errors and improving data accuracy. Ensured secure data transfer between legacy and modern systems.",
    skills: [
      "MySQL",
      "MongoDB",
      "Data Migration",
      "Node.js",
      "TypeScript",
      "Quality Assurance",
      "Security",
    ],
    tech_stack: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    role: "Backend Developer – Designed data migration logic and built admin tools while securing data flows.",
    results: "Achieved 98% data accuracy and reduced onboarding time by 40%.",
    challenges_solved:
      "Handled large-scale data migrations with minimal downtime, ensuring secure authentication.",
    future_improvements: [
      "Automating migration rollback for better error handling",
      "Enhancing data validation mechanisms",
    ],
  },
  {
    name: "Real-Time Notification System",
    duration: "Oct 2021 - Apr 2022",
    description:
      "Implemented a real-time notification system to improve user engagement and responsiveness within the ATS.",
    skills: [
      "Firebase Cloud Messaging",
      "Real-Time Systems",
      "Node.js",
      "TypeScript",
      "Security",
    ],
    tech_stack: ["Node.js", "Firebase Cloud Messaging", "WebSockets"],
    role: "Software Engineer Intern – Developed a real-time notification system and ensured secure message delivery.",
    results: "Improved user engagement by 10% and reduced response delays.",
    challenges_solved:
      "Ensured reliable message delivery, implemented authentication for notifications.",
    future_improvements: [
      "Adding read receipts for notifications",
      "Enhancing notification preferences and user settings",
    ],
  },
];


function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="App-section" id="projects">
      <h2 className="App-section-title">Projects</h2>
      <Slider {...settings} className="App-projects-carousel">
        {projects.map((project, index) => (
          <div className="App-project-item" key={index}>
            <div className="App-project-card">
              <h3 className="App-project-title">
                {project.name}</h3>
              <p className="App-project-duration">
                <strong>Duration:</strong> {project.duration}
              </p>
              <p className="App-project-description">
                {project.description}</p>
              <p className="App-project-description">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="App-project-skills">
                <strong>Skills:</strong> {project.skills.join(", ")}
              </p>
              <p className="App-project-tech-stack">
                <strong>Tech Stack:</strong> {project.tech_stack.join(", ")}
              </p>
              <p className="App-project-results">
                <strong>Results:</strong> {project.results}
              </p>
              {/* <p className="App-project-challenges">
                <strong>Challenges Solved:</strong> {project.challenges_solved}
              </p> */}
              <p className="App-project-future">
                <strong>Future Improvements:</strong>
              </p>
              <ul className="App-project-imporvements">
                {project.future_improvements.map((improvement, i) => (
                  <li key={i}>{improvement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Projects;