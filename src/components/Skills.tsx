import React from 'react';
import { FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiTypescript, SiJavascript, SiMongodb, SiJenkins, SiPython } from 'react-icons/si';
import { TbBrandElastic, TbBrandFirebase  } from "react-icons/tb";
import { DiRedis } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { MdOutlineBuild } from 'react-icons/md';

function Skills() {
  const skills: { name: string; icon: React.ReactNode }[] = [
    { name: 'Node.js', icon: FaNodeJs({}) },
    { name: 'Express.js', icon: SiExpress({}) },
    { name: 'TypeScript', icon: SiTypescript({}) },
    { name: 'JavaScript', icon: SiJavascript({}) },
    { name: 'Elasticsearch', icon: TbBrandElastic({}) },
    { name: 'MySQL', icon: GrMysql({}) },
    { name: 'MongoDB', icon: SiMongodb({}) },
    { name: 'Firebase', icon: TbBrandFirebase({}) },
    { name: 'AWS SQS', icon: FaAws({}) },
    { name: 'Redis', icon: DiRedis({}) },
    { name: 'AWS S3', icon: FaAws({}) },
    { name: 'Git', icon: FaGitAlt({}) },
    { name: 'Microservices', icon: null }, // No specific icon available
    { name: 'Jenkins', icon: SiJenkins({}) },
    { name: 'Docker (Beginner)', icon: FaDocker({}) },
    { name: 'Python (Beginner)', icon: SiPython({}) },
    { name: 'React (Basic)', icon: FaReact({}) },
  ];

  return (
    <section className="App-section" id="skills">
      <h2 className="App-section-title">
        Skills {MdOutlineBuild({ className: "App-section-icon" })}
      </h2>
      <div className="App-skills">
        {skills.map((skill, index) => (
          <div className="App-skill" key={index}>
            {skill.icon && <span className="App-skill-icon">{skill.icon}</span>}
            <span className="App-skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
