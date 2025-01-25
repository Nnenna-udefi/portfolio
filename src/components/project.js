import React, { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { BaseModal } from "./baseModal";
import Todo from "../images/Todo-List.png";
import HouseOfAccent from "../images/Home-House-of-Ascent.png";
import TellaTrustAdmin from "../images/TellaTrust.png";
import Easycare from "../images/easycare.jpg";
import Bookishreads from "../images/bookrishread_home.png";
import DChirs from "../images/DCHAIR.png";
import HerRise from "../images/herRise.png";

const projectList = [
  {
    image: DChirs,
    alt: "DC braiding",
    desc: "Web App for a braiding salon, which includes booking page and an admin dashboard",
    live_link: "https://dc-braiding.onrender.com/",
    github_link: "https://github.com/Nnenna-udefi/booking-app",
    language: ["REACTJS", "NODE", "MONGODB", "TYPESCRIPT", "TAILWINDCSS"],
  },
  {
    image: HerRise,
    alt: "HerRise Foundation",
    desc: "Web interface for a women non-profit organization",
    live_link: "https://herrise-foundation.onrender.com/",
    github_link: "https://github.com/Nnenna-udefi/HerRise",
    language: ["REACTJS", "TYPESCRIPT", "TAILWINDCSS"],
  },
  {
    image: TellaTrustAdmin,
    alt: "Tellatrust admin",
    desc: "Web interface for TellaTrust Admin",
    live_link: "https://admin.tellatrust.com/",
    github_link: "https://github.com/Swizel-Tech/tellatrust-admin",
    language: ["REACTJS", "VITE", "TYPESCRIPT", "TAILWINDCSS"],
  },
  {
    image: Bookishreads,
    alt: "bookishreads hero",
    desc: "This is a book recommendation system which uses Content based filtering to offer personalized recommendation based on a user's input.",
    live_link: "https://bookishreads.onrender.com/",
    github_link: "https://github.com/Nnenna-udefi/bookishread_project.git",
    language: ["HTML", "CSS", "PYTHON", "FLASK"],
  },

  {
    image: Todo,
    alt: "todolist hero",
    desc: "A web app that allows users to enter a list of activities they need to do and sort.",
    live_link: "https://todolist-appxi.vercel.app/",
    github_link: "https://github.com/Nnenna-udefi/todolist",
    language: ["REACTJS", "SCSS", "HTML"],
  },

  {
    image: HouseOfAccent,
    alt: "houseofaccent hero",
    desc: "A web app that empowers individuals to achieve personal growth",
    live_link: "https://house-of-accent.vercel.app/",
    github_link: "https://github.com/RehkMansa/house_of_accent",
    language: ["REACTJS", "NEXTJS", "TYPESCRIPT", "TAILWINDCSS"],
  },

  {
    image: Easycare,
    alt: "easycare hero",
    desc: "A web app that connects care givers to people especially the elderly who needs their services. It was a 6-page project I worked on with a team.",
    live_link: "https://easycare-n.vercel.app/",
    github_link: "https://github.com/Nnenna-udefi/easy-care.git",
    language: ["HTML", "CSS", "JAVASCRIPT"],
  },
];

function Project() {
  useScrollReveal();

  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [newProject, setNewProject] = useState({
    image: "",
    alt: "",
    desc: "",
    live_link: "",
    github_link: "",
    language: [],
  });

  const correctPasscode = "nnenna";

  useEffect(() => {
    localStorage.setItem("projectList", JSON.stringify(projectList));
  }, []);

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();
    if (passcode === correctPasscode) {
      setShowProjectForm(true);
      setShowCodeModal(false);
    } else {
      alert("Incorrect PassCode!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    projectList.push(newProject);
    setShowProjectForm(false);
    alert("Project added successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setNewProject({ ...newProject, image: imageUrl, alt: file.name });
  };

  return (
    <div id="project" className="project">
      <h1>Projects</h1>

      <p className="project-p">
        Here are a few projects I've partnered and worked on:{" "}
      </p>

      <div className="pro-img">
        {projectList.map((project) => (
          <div key={project.desc}>
            <div className="img-project reveal" key={project.desc}>
              <img src={project.image} alt={project.alt} />
              <div className="project-text">
                <p>{project.desc}</p>
                <ul className="project-list">
                  {project.language.map((lang) => (
                    <li>{lang}</li>
                  ))}
                </ul>
                <a href={project.live_link}>
                  <button className="project-btn">VISIT SITE</button>
                </a>
                <a href={project.github_link}>
                  <button className="project-btn">CODE</button>
                </a>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <button className="download_btn" onClick={() => setShowCodeModal(true)}>
        Add a Project
      </button>

      <BaseModal isOpen={showCodeModal} onClose={() => setShowCodeModal(false)}>
        <div>
          <div>
            <h2>Enter PassCode</h2>
            <form onSubmit={handlePasscodeSubmit}>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="modal-input"
              />
              <button type="submit" className="modal-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={showProjectForm}
        onClose={() => setShowProjectForm(false)}
      >
        <div>
          <div>
            <h2>Add a New Project</h2>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="desc"
                placeholder="Enter Project Description"
                value={newProject.desc}
                className="modal-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="live_link"
                placeholder="Live Link"
                value={newProject.live_link}
                className="modal-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="github_link"
                placeholder="GitHub Link"
                value={newProject.github_link}
                className="modal-input"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="language"
                placeholder="Languages (comma separated)"
                className="modal-input"
                value={newProject.language.join(", ")}
                onChange={(e) =>
                  setNewProject({
                    ...newProject,
                    language: e.target.value.split(", "),
                  })
                }
              />

              <input
                type="file"
                name="image"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              ></input>
              <br />
              <button type="submit" className="modal-button">
                Add Project
              </button>
            </form>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}

export default Project;
