import React from 'react';
import './Skill.css';
import { useNavigate } from 'react-router-dom';

function Skill() {
  const skills = ['Golang', 'React.JS', 'MySQL', 'Java', 'HTML', 'CSS'];

  return (
    <div className="skill-container">
      <h2 className="skill-title">Technical Skills</h2>
      <div className="square">
        <div className="skill-list">
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <span>{skill}</span>
              {index !== skills.length - 1 && <span className="separator"> | </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
