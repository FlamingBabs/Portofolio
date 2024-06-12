import React from 'react';
import './Home.css'; // You can modify this to include your styles
import Navbar from '../navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import cv from '../../assets/CV.pdf'

function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/contact')
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv; 
    link.download = 'CV.pdf'; 
    link.click();
  }

  return (
    <>
      <div className="container">
          <div className="about-me">
            <h2>Hi, I'm Reyhan</h2>
            <h3>A Software Engineer that's eager to learn new things everyday.</h3>
            <button className="contact-button" onClick={handleClick}>Contact</button>
            <button className="cv-button" onClick={handleDownload}>CV</button>
          </div>
      </div>
    </>
  );
}

export default Home;
