import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>
        I’m a **Software Engineer & Research Enthusiast** passionate about **Front-End Development, Machine Learning, and UX/UI Design**.  
        I love building **intelligent, user-friendly applications** and exploring **AI & NLP** to solve real-world problems.  
        Beyond tech, I'm also an **artist, singer, and content creator**, blending creativity with innovation.  
        Let’s connect and build something amazing! 🚀✨
      </p>

      <div className="personal-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> Pallavi</p>
        <p><strong>Location:</strong> Katangi, MP, India</p>
        <p><strong>Email:</strong> <a href="mailto:pallavipardhi2003@gmail.com">pallavipardhi2003@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+916261697012">+91 6261697012</a></p>
        <p><strong>LinkedIn:</strong> 
          <a 
            href="https://www.linkedin.com/in/pallavi-pardhi-6a92a3294/" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => alert("Redirecting to LinkedIn")}
          >
            @PallaviPardhi
          </a>
        </p>
      </div>

      <div className="education">
        <h2>Education</h2>
        <p><strong>Oriental Institute of Science & Technology</strong> | B.Tech in CSE | CGPA: 9.15</p>
        <p><strong>Bal Vikas Higher Secondary School</strong> | Class 12th | 84%</p>
      </div>

      <div className="experience">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Oasis Infobyte | Front-End Developer</strong> (Mar 2023 – Apr 2023)
            <ul>
              <li>Developed and designed the front end of the website to enhance its online presence and user experience.</li>
              <li>Used HTML, CSS, and JavaScript to create a visually appealing, user-friendly website.</li>
            </ul>
          </li>
          <li>
            <strong>Cisco Virtual Internship | Computer Networking</strong> (Jun 2023 – Jul 2023)
            <ul>
              <li>Designed network infrastructures using Cisco Packet Tracer, showcasing strong networking knowledge.</li>
              <li>Enhanced understanding of Cisco technologies through self-study and hands-on experience.</li>
            </ul>
          </li>
        </ul>
      </div>

      

      <div className="skills">
        <h2>Technical Skills</h2>
        <p><strong>Programming Languages:</strong> C, C++, Python, Java</p>
        <p><strong>Frontend Development:</strong> HTML5, CSS3, JavaScript, React</p>
        <p><strong>Backend Development:</strong> JSP, Servlets, Spring Boot</p>
        <p><strong>Databases & Tools:</strong> MySQL, GitHub</p>
        <p><strong>Soft Skills:</strong> Event Management, Public Speaking, Time Management, Teamwork</p>
      </div>

      <div className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>SKILL-A-THON: Introduction to Networks (CISCO)</li>
          <li>Problem Solving through C (NPTEL)</li>
          <li>The Bits and Bytes of Computer Networking (Google)</li>
          <li>Crash Course on Python (Google)</li>
          <li>Oracle Database Foundations (Coursera)</li>
          <li>Oracle SQL Basics (Coursera)</li>
          <li>Introduction to HTML & CSS (Coursera)</li>
        </ul>
      </div>

      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>
            <strong>Flipkart Grid 5.0 | Information Security Challenge</strong> (Aug 2023 – Sep 2023)
            <ul>
              <li>Selected as a top participant in the quiz round.</li>
              <li>Developed a working prototype for compliance monitoring and log analysis.</li>
            </ul>
          </li>
          <li>4-Star in Problem Solving (HackerRank)</li>
          <li>Certificate of Achievement in Interview & Communication Skills (TCS-ion)</li>
        </ul>
      </div>

      <div className="responsibilities">
        <h2>Responsibilities</h2>
        <p><strong>Head Coordinator | Talent Star Light</strong></p>
        <p>Organized and managed a large-scale talent event, showcasing diverse talents across different age groups.</p>
      </div>
    </section>
  );
};

export default About;
