import React, { useState, useEffect } from "react";
import IMG1 from "../../assets/bookStore.png";

import "./project.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "BookStore",
      img: IMG1,
      description:
        "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: "https://bookstore-backend-zbwq.onrender.com/",
      github: "https://github.com/amanyadav777/bookStore",
      projectDetails: [
        {
          title: "BookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "NewBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "oldBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "fourthBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
      ],
    },
    {
      id: 2,
      title: "Doctors Appointment",
      img: IMG1,
      description:
        "Build a resilient MERN stack appointment app facilitating doctor profile creation and user bookings with real-time availability. Admin, doctor, and user panels streamline tasks, fostering efficient management and improved interactions in healthcare scheduling",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: null,
      github: "https://github.com/amanyadav777/DoctorsAppointement",
      projectDetails: [
        {
          title: "BookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "NewBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "oldBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "fourthBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
      ],
    },
    {
      id: 3,
      title: "We-Chatt",
      img: IMG1,
      description:
        "Built a robust MERN chat app with user profiles, real-time search, one-to-one chat, group creation, and instant notifications. Prioritizing communication, the app enhances user engagement with streamlined features for seamless interaction and optimal user experience.",
      technologies:
        "ReactJS, NodeJS, ExpressJS, Socket.io, MongoDB, HTML5, CSS3, JS",
      link: null,
      github: "https://github.com/amanyadav777/We-Chatt",
      projectDetails: [
        {
          title: "BookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "NewBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "oldBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "fourthBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
      ],
    },
    {
      id: 4,
      title: "StockX",
      img: IMG1,
      description:
        "In a rapid 3-day hackathon, crafted a dynamic project integrating NSE/BSE index data and details from five major companies. Implemented user-friendly Login/SignUp, and utilized graph-based visualization for easy market metric analysis, covering Opening, Closing, High, Low, etc.",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: null,
      github: "https://github.com/amanyadav777/Team-Baapu",
      projectDetails: [
        {
          title: "BookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "NewBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "oldBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "fourthBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
      ],
    },
    {
      id: 5,
      title: "Portfolio",
      img: IMG1,
      description:
        "In a rapid 3-day hackathon, crafted a dynamic project integrating NSE/BSE index data and details from five major companies. Implemented user-friendly Login/SignUp, and utilized graph-based visualization for easy market metric analysis, covering Opening, Closing, High, Low, etc.",
      technologies:
        "ReactJS, NodeJS, ExpressJS, MongoDB, Redux, Ant design, HTML5, CSS3, JS",
      link: null,
      github: "https://github.com/amanyadav777/Team-Baapu",
      projectDetails: [
        {
          title: "BookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "NewBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "oldBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
        },
        {
          title: "fourthBookStore",
          img: IMG1,
          description:
            "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
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
