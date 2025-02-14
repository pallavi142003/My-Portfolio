import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-card">
          <h2>Smart Career Growth Tracker</h2>
          <p>A career tracking system to help users plan their skills and goals efficiently.</p>
        </div>
        <div className="project-card">
          <h2>CarConnect Car Rental Platform</h2>
          <p>A complete car rental system built using Java Full Stack.</p>
        </div>
        <div className="project-card">
          <h2>Revolutionizing Compliance Monitoring</h2>
          <p>Developed an ML model (NLP + BERT) for anomaly detection and log analysis.</p>
        </div>
        <div className="project-card">
          <h2>Empower Orphans</h2>
          <p>Created an automation website for orphanages, including donation tracking.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
