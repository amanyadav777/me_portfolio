import React, { useState, useEffect } from "react";

// book Store images
import IMG1 from "../../assets/bookStoreImages/bookStore.png";
import LOGIN from "../../assets/bookStoreImages/signup.png";
import REGISTER from "../../assets/bookStoreImages/register.png";
import BOOKLIST from "../../assets/bookStoreImages/bookList.png";
import BOOKDETAILS from "../../assets/bookStoreImages/bookDetails.png";

// doctors Appointment images

import DOC_HOME from "../../assets/DoctorsAppointmentImages/homepage.png";
import DOC_LOGIN from "../../assets/DoctorsAppointmentImages/login.png";
import DOC_REGISTER from "../../assets/DoctorsAppointmentImages/register.png";
import DOC_APPOINTMENTS from "../../assets/DoctorsAppointmentImages/image.png";

// portfolio Images
import PORT_HOME from "../../assets/portfolioImages/home.png";
import PORT_ABOUTME from "../../assets/portfolioImages/aboutMe.png";
import PORT_CONTACTME from "../../assets/portfolioImages/contactMe.png";
import PORT_EDUCATION from "../../assets/portfolioImages/education.png";
import PORT_PROJECTS from "../../assets/portfolioImages/projects.png";
import PORT_SKILLS from "../../assets/portfolioImages/skills.png";

import "./project.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "BookStore",
      img: IMG1,
      description: "",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: "https://bookstore-backend-zbwq.onrender.com/",
      github: "https://github.com/amanyadav777/bookStore",
      projectDetails: [
        {
          title: "BookStore",
          img: IMG1,
          description: "",
        },
        {
          title: "Login Page",
          img: LOGIN,
          description: "",
        },
        {
          title: "Register Page",
          img: REGISTER,
          description: "",
        },
        {
          title: "Book List",
          img: BOOKLIST,
          description: "",
        },
        {
          title: "Book Details",
          img: BOOKDETAILS,
          description: "",
        },
      ],
    },
    {
      id: 2,
      title: "Doctors Appointment",
      img: DOC_HOME,
      description:
        "Build a resilient MERN stack appointment app facilitating doctor profile creation and user bookings with real-time availability. Admin, doctor, and user panels streamline tasks, fostering efficient management and improved interactions in healthcare scheduling",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: "https://doctors-appointment-smoky.vercel.app/",
      github: "https://github.com/amanyadav777/DoctorsAppointement",
      projectDetails: [
        {
          title: "Home Page",
          img: DOC_HOME,
          description:
            "",
        },
        {
          title: "Login Page",
          img: DOC_LOGIN,
          description:
            "",
        },
        {
          title: "Register Page",
          img: DOC_REGISTER,
          description:
            "",
        },
        {
          title: "Appointments Page",
          img: DOC_APPOINTMENTS,
          description:
            "",
        },
      ],
    },
    // {
    //   id: 3,
    //   title: "We-Chatt",
    //   img: IMG1,
    //   description:
    //     "Built a robust MERN chat app with user profiles, real-time search, one-to-one chat, group creation, and instant notifications. Prioritizing communication, the app enhances user engagement with streamlined features for seamless interaction and optimal user experience.",
    //   technologies:
    //     "ReactJS, NodeJS, ExpressJS, Socket.io, MongoDB, HTML5, CSS3, JS",
    //   link: null,
    //   github: "https://github.com/amanyadav777/We-Chatt",
    //   projectDetails: [
    //     {
    //       title: "BookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //     {
    //       title: "NewBookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //     {
    //       title: "oldBookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //     {
    //       title: "fourthBookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "StockX",
    //   img: IMG1,
    //   description:
    //     "In a rapid 3-day hackathon, crafted a dynamic project integrating NSE/BSE index data and details from five major companies. Implemented user-friendly Login/SignUp, and utilized graph-based visualization for easy market metric analysis, covering Opening, Closing, High, Low, etc.",
    //   technologies:
    //     "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
    //   link: null,
    //   github: "https://github.com/amanyadav777/Team-Baapu",
    //   projectDetails: [
    //     {
    //       title: "BookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //     {
    //       title: "NewBookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //     {
    //       title: "oldBookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //     {
    //       title: "fourthBookStore",
    //       img: IMG1,
    //       description:
    //         "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
    //     },
    //   ],
    // },
    {
      id: 5,
      title: "Portfolio",
      img: PORT_HOME,
      description:
        "In a rapid 3-day hackathon, crafted a dynamic project integrating NSE/BSE index data and details from five major companies. Implemented user-friendly Login/SignUp, and utilized graph-based visualization for easy market metric analysis, covering Opening, Closing, High, Low, etc.",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: null,
      github: "https://github.com/amanyadav777/me_portfolio",
      projectDetails: [
        {
          title: "Home Page",
          img: PORT_HOME,
          description: "",
        },
        {
          title: "About Page",
          img: PORT_ABOUTME,
          description: "",
        },
        {
          title: "Experience & Education Page",
          img: PORT_EDUCATION,
          description: "",
        },
        {
          title: "Skills Page",
          img: PORT_SKILLS,
          description: "",
        },
        {
          title: "Projects Page",
          img: PORT_PROJECTS,
          description: "",
        },
        {
          title: "Contact Me Page",
          img: PORT_CONTACTME,
          description: "",
        },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    if (isModalOpen && currentProject) {
      const interval = setInterval(() => {
        setCurrentDetailIndex((prevIndex) =>
          prevIndex === currentProject.projectDetails.length - 1
            ? 0
            : prevIndex + 1
        );
      }, 3000); // Auto-scroll every 3 seconds

      return () => clearInterval(interval); // Cleanup on unmount or modal close
    }
  }, [isModalOpen, currentProject]);

  const openModal = (project) => {
    setCurrentProject(project);
    setCurrentDetailIndex(0); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  const nextDetail = () => {
    setCurrentDetailIndex((prevIndex) =>
      prevIndex === currentProject.projectDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevDetail = () => {
    setCurrentDetailIndex((prevIndex) =>
      prevIndex === 0 ? currentProject.projectDetails.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {projects.map((project, index) => (
          <article
            className="project__item"
            key={project.id}
            onClick={() => openModal(project)}
          >
            <div className="project__item-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project__item-content">
              <h3>{project.title}</h3>
              <p>{project.technologies}</p>
            </div>
            <div className="project__item-cta">
              <a
                href={project.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {project?.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {isModalOpen && currentProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ✖
            </button>
            <h2>{currentProject.projectDetails[currentDetailIndex].title}</h2>
            <img
              src={currentProject.projectDetails[currentDetailIndex].img}
              alt="Project Detail"
            />
            <p>
              {currentProject.projectDetails[currentDetailIndex].description}
            </p>

            <div className="modal-controls">
              <button className="btn btn-primary" onClick={prevDetail}>
                Previous
              </button>
              <button className="btn btn-primary" onClick={nextDetail}>
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
