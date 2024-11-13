import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import "./skills.css";

const Skills = () => {
  return (
    <section id="skill">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Front-end Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>React</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Chakra UI</h4>
            </article>
          </div>
        </div>
        <div className="skill__backend">
          <h3>Back-end Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>NodeJs</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>ExpressJs</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>SQL</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
        <div className="skill__language">
          <h3>Languages</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>C</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>C++</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
          </div>
        </div>
        <div className="skill__miscellaneous">
          <h3>Miscellaneous</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>DSA</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>DBMS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>OOPS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>VS Code</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills