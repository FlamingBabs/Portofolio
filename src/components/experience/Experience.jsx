import React from 'react';
import './Experience.css';
import companyLogo from '../../assets/matrixnet.jpeg'; // Replace with the actual path to your logo

function Experience() {
  // Sample experience data
  const experience = {
    company: 'PT.Matrixnet Global Indonesia',
    logo: companyLogo,
    position: 'Programmer',
    yearsOfService: 'February 2022 - Present',
    jobDescription: 'Developed and maintained web applications using React and Node.js.',
  };

  return (
    <div className="experience-container">
      <img src={experience.logo} alt={`${experience.company} logo`} className="company-logo" />
      <div className="experience-details">
        <div className="details-box">
          <h3>{experience.company}</h3>
          <h4>{experience.position}</h4>
          <p>{experience.yearsOfService}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
