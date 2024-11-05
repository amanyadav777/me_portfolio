import React, { useState } from "react";
import "./experience&education.css";
import { FaLocationDot } from "react-icons/fa6";
import { VscCircleLargeFilled } from "react-icons/vsc";

const ExperienceEducation = () => {
  const [toggle, setToggle] = useState("experiences");
  const educations = [
    {
      name: "Indian Institute of Information Technology, Surat",
      degree: "B.Tech",
      score: "CGPA : 9.19",
      start_date: 2020,
      end_date: 2024,
    },
    {
      name: "Naval's National Academy",
      degree: "Class 12th",
      score: "88.4%",
      start_date: 2018,
      end_date: 2019,
    },
    {
      name: "Naval's National Academy",
      degree: "Class 10th",
      score: "CGPA : 9.4",
      start_date: 2016,
      end_date: 2017,
    },
  ];
  const experiences = [
    {
      name: "Floww APIs Pvt Ltd",
      role: "Backend Developer",
      start_date: "Aug 2024",
      end_date: "Present",
    },
    {
      name: "Floww APIs Pvt Ltd",
      role: "Backend Developer Intern",
      start_date: "Mar 2024",
      end_date: "July 2024",
    },
    {
      name: "Allora",
      role: "Software Development Intern",
      start_date: "Jan 2024",
      end_date: "Mar 2024",
    },
  ];

  return (
    <div className="ee">
      <div className="ee__button">
        <button
          className="btn btn-primary ml-1"
          onClick={() => setToggle("experiences")}
        >
          Experience
        </button>
        <button
          className="btn btn-primary mr-1"
          onClick={() => setToggle("educations")}
        >
          Education
        </button>
      </div>
      <div className="ee__content">
        {toggle === "experiences" ? (
          <div className="ee__experience">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`df ${index % 2 === 0 ? "ee__left" : "ee__right"}`}
              >
                <div className="ee__icon">
                  <FaLocationDot />
                </div>
                <div className="ee__line" />
                <div
                  className={`ee__details ${
                    index % 2 === 0 ? "ee__details__left" : "ee__details__right"
                  }`}
                >
                  <h3>{experience.name}</h3>
                  <h4>{experience.role}</h4>
                  <span>
                    {experience.start_date} - {experience.end_date}
                  </span>
                </div>
              </div>
            ))}
            <VscCircleLargeFilled className="ee__dot" />
          </div>
        ) : (
          <div className="ee__education">
            {educations.map((education, index) => (
              <div
                key={index}
                className={`df ${index % 2 === 0 ? "ee__left" : "ee__right"}`}
              >
                <div className="ee__icon">
                  <FaLocationDot />
                </div>
                <div className="ee__line" />
                <div
                  className={`ee__details ${
                    index % 2 === 0 ? "ee__details__left" : "ee__details__right"
                  }`}
                >
                  <h3>{education.name}</h3>
                  <h4>{education.degree}</h4>
                  <h4>{education.score}</h4>
                  <span>
                    {education.start_date} - {education.end_date}
                  </span>
                </div>
              </div>
            ))}
            <VscCircleLargeFilled className="ee__dot" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceEducation;
