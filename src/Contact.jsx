import React from 'react';
import './Contact.css';
import profilePic from './assets/profile.jpg';

const Contact = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <img src={profilePic} alt="Pallavi" className="profile-img"/>
      <p>Email: pallavipardhi@gmail.com</p>
      <p>Phone: +91 6261697012</p>
    </section>
  );
};

export default Contact;
