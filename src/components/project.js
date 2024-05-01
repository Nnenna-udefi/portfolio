import React from "react";
import Roots from "../images/Roots.png";
import Sunnyside from "../images/sunnyside.jpg";
import travel from "../images/travelc.png";
import Easycare from "../images/easycare.jpg";
import Bookishreads from "../images/bookrishread_home.png";
import useScrollReveal from "../hooks/useScrollReveal";

function Project() {
  useScrollReveal();

  return (
    <div id="project" className="project">
      <h1>Projects</h1>

      <p className="project-p">
        Here are a few projects I've partnered and worked on:{" "}
      </p>

      <div className="pro-img">
        <div className="img-project reveal">
          <img src={Bookishreads} alt="bookishreads hero" />
          <div className="project-text">
            <p>
              This is a book recommendation system which uses Content based
              filtering to offer personalized recomendation based on a user's
              input.
            </p>
            <ul className="project-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>PYTHON</li>
              <li>FlASK</li>
            </ul>
            <a href="https://bookishreads.onrender.com/">
              <button className="project-btn">VISIT SITE</button>
            </a>
            <a href="https://github.com/Nnenna-udefi/bookishread_project.git">
              <button className="project-btn">CODE</button>
            </a>
          </div>
        </div>
        <hr />
        <div className="img-project reveal">
          <img src={Easycare} alt="easycare hero" />
          <div className="project-text">
            <p>
              I was contracted to build the website for an agency that connects
              care givers to people especially the elderly who needs their
              services. It was a 6-page project I worked on with a team.
            </p>
            <ul className="project-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <a href="https://easycare-n.vercel.app/">
              <button className="project-btn">VISIT SITE</button>
            </a>

            <a href="https://github.com/Nnenna-udefi/easy-care.git">
              <button className="project-btn">CODE</button>
            </a>
          </div>
        </div>

        <hr />
        <div className="img-project reveal">
          <div className="project-text">
            <p>
              This site was built for a restaurant named Roots and Cafe. It was
              3 page site built with Reactjs framework.
            </p>
            <ul className="project-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT JAVASCRIPT</li>
            </ul>
            <a href="https://restaurant-website-woad.vercel.app">
              <button className="project-btn">VISIT SITE</button>
            </a>

            <a href="https://github.com/Nnenna-udefi/Restaurant-Website-1.git">
              <button className="project-btn">CODE</button>
            </a>
          </div>

          <img src={Roots} alt="roots cafe hero" />
        </div>

        <hr />
        <div className="img-project reveal">
          <img src={Sunnyside} alt="" />

          <div className="project-text">
            <p>Built with tailwind CSS and HTML5 </p>
            <ul className="project-list">
              <li>HTML</li>
              <li>TAILWIND CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <a href="https://sunnyside-agency-card-capstone-project.vercel.app">
              <button className="project-btn">VISIT SITE</button>
            </a>

            <a href="https://github.com/Nnenna-udefi/sunnyside-agency-card-capstone-project-2.git">
              <button className="project-btn">CODE</button>
            </a>
          </div>
        </div>

        <hr />
        <div className="img-project reveal">
          <div className="project-text">
            <p>
              {" "}
              This is a travel agency site built with React JS framework and CSS
              grid
            </p>
            <ul className="project-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>REACT JAVASCRIPT</li>
            </ul>
            <a href="https://artic-travel.netlify.app/">
              <button className="project-btn">VISIT SITE</button>
            </a>

            <a href="https://github.com/Nnenna-udefi/travel.git">
              <button className="project-btn">CODE</button>
            </a>
          </div>

          <img src={travel} alt="travel agency" />
        </div>

        <hr />
      </div>
    </div>
  );
}

export default Project;
