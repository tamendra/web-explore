import React from 'react';
import trLogo from '../assets/talent-recruit-logo.png';
function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Talent Recruit Software Pvt. Ltd.',
      location: 'Bengaluru, India',
      duration: 'May 2022 - Present',
      about: 'Talent Recruit is a leading provider of Applicant Tracking Systems (ATS) that streamline recruitment workflows for enterprises.',
      growth: 'Promoted from Software Engineer Intern to Software Engineer in May 2022.',
      skills: 'Node.js, Express.js, TypeScript, Elasticsearch, MySQL, MongoDB, Docker, Jenkins, AWS SQS, Redis.',
      achievements: [
        'Implemented ELK stack for advanced search, reducing candidate/job search time by 30% and increasing relevant match accuracy by 20%.',
        'Designed and optimized workflows for requirement approval, job creation, and candidate engagement, boosting recruitment productivity.',
        'Developed secure inbound and gateway APIs for seamless communication between ATS and external systems using Node.js, Express, and TypeScript.',
        'Led data migration and admin tool development, achieving a 98% data accuracy rate and reducing client onboarding time by 40%.',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Talent Recruit Software Pvt. Ltd.',
      location: 'Bengaluru, India',
      duration: 'Oct 2021 - Apr 2022',
      about: 'Talent Recruit is a leading provider of Applicant Tracking Systems (ATS) that streamline recruitment workflows for enterprises.',
      skills: 'Node.js, Firebase, Agile Methodologies, Quality Assurance.',
      achievements: [
        'Established a real-time notification system using Firebase Cloud Messaging, improving user engagement by 10%.',
        'Followed coding standards and Agile practices, enhancing code quality and team efficiency.',
        'Wrote and tested code for specific features under senior developers\' supervision.',
      ],
    },
  ];

  return (
    <section className="App-section" id="experience">
      <h2>Experience</h2>
      <div className="App-experience">
        {experiences.map((exp, index) => (
          <div className="App-experience-item" key={index}>
            <div className="App-experience-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="App-experience-details">
                <h3>{exp.role}</h3>
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Location:</strong> {exp.location}</p>
                <p><strong>Duration:</strong> {exp.duration}</p>
              </div>
              <img
                src={trLogo}
                alt={`${exp.company} Logo`}
                className="App-company-logo-right"
              />
            </div>
            <p><strong>About the Company:</strong> {exp.about}</p>
            {exp.growth && <p><strong>Growth Path:</strong> {exp.growth}</p>}
            <p><strong>Skills Used:</strong> {exp.skills}</p>
            <ul>
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;