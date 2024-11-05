import React from 'react';
import ME from '../../assets/me.jpg';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I'm a Backend Developer specializing in building scalable, efficient
            applications that enhance user experience and streamline workflows.
            With a strong foundation in Python, Django, and the MERN stack, I’m
            dedicated to creating robust solutions, from API development to
            AI-driven systems. My focus is on solving complex challenges with
            clean, optimized code while continuously expanding my skill set
            through open-source contributions and new technologies. Let’s
            connect to explore collaboration opportunities and innovative
            projects!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About