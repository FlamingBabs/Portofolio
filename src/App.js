import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/home/Home';
import Projects from './components/projects/Project';
import Navbar from './components/navbar/Navbar';
import Skill from './components/skills/Skill';
import Experience from './components/experience/Experience';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.key} classNames="slide" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="background">
          <Navbar />
          <div className="content-wrapper">
            <AnimatedRoutes />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
