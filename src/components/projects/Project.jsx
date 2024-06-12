import React, { useState } from 'react';
import './Project.css'; // You can modify this to include your styles
import Navbar from '../navbar/Navbar';
import anabelProj from '../../assets/anabelproj.png';
import pinq from '../../assets/pinqnetworx.png'

// Sample project data
const projectData = [
  {
    title: 'ANABEL',
    image: anabelProj,
    description: "ANABEL is an application i developed for my thesis, the app purpose was to find an alternative funding for a store owner in case needed emergency money",
    tools: 'React.JS, Go, MySQL',
  },
  {
    title: 'HOTELO',
    image: anabelProj,
    description: 'Hotelo is a back office application for PT.Matrixnet Global Indonesia Hotel customer to Create, Read, Update, Delete (CRUD) items from the hotel. the app also works to manage check in for customers on the hotel.',
    tools: 'React.JS, Go, MySQL',
  },
  {
    title: 'IOD',
    image: anabelProj,
    description: 'IOD is an app in SetUpBox that Matrixnet provided. the purpose is to help customer buy internet and select the bandwidth and length.',
    tools: 'Java, Go, MySQL',
  },
  {
    title: 'Pinq Networx Company Profile Page',
    image: pinq,
    description: 'Pinq Networx is a company profile page website for PT.Pinq Andalan Utama',
    tools: 'React.JS',
  },
];

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const { title, image, description, tools } = projectData[currentSlide];

  return (
    <>
      <div className="project-container">
        <div className="slideshow">
          <h2 className="slideshow-title">Projects</h2>
          <div className="slide">
            <button className="nav-button left" onClick={handlePrev}>&#8592;</button>
            <img src={image} alt={title} className="slide-image" />
            <button className="nav-button right" onClick={handleNext}>&#8594;</button>
            <div className="slide-description">
              <h3 className="slide-title">{title}</h3>
              <p>{description}</p>
              <p className="slide-tools"><strong>Tools used:</strong> {tools}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;



