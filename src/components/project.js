import React from "react";
import Easycare from "../images/easycare.jpg";
import Bookishreads from "../images/bookrishread_home.png";
import useScrollReveal from "../hooks/useScrollReveal";
import Todo from "../images/Todo-List.png";
import HouseOfAccent from "../images/Home-House-of-Ascent.png";
import TellaTrustAdmin from "../images/TellaTrust.png";

const projectList = [
  {
    image: TellaTrustAdmin,
    alt: "Tellatrust admin hero",
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

  return (
    <div id="project" className="project">
      <h1>Projects</h1>

      <p className="project-p">
        Here are a few projects I've partnered and worked on:{" "}
      </p>

      <div className="pro-img">
        {projectList.map((project) => (
          <div>
            <div className="img-project reveal">
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
    </div>
  );
}

export default Project;
