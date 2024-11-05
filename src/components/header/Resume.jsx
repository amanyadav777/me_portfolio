import React from 'react';
import resume from '../../assets/Resume Aman Yadav.pdf';

const Resume = () => {
  return (
    <div className="resume">
      <a href={resume} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default Resume;
