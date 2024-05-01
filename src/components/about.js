import React from "react";
import Profile from "../images/nnenna-img.jpeg";
import useScrollReveal from "../hooks/useScrollReveal";

function About() {
  useScrollReveal();

  return (
    <div id="about">
      <div className="about-intro">
        <div>
          <h1>About Me</h1>
          <p>I'm a Front End Developer from Nigeria.</p>
          <p>
            A passionate and goal driven Techpreneur whose interest is in using
            technology to build solutions to solve real world problems.
          </p>
          <p>
            I love building websites with responsive designs which also focuses
            on accesibility. I got into programming in 2021 and since then I
            have had the opportunity to work with amazing people and on diverse
            projects.
          </p>
        </div>
        <div>
          <img src={Profile} alt="profile-img" className="profile" />
        </div>
      </div>

      <div className="skills reveal">
        <h1>My Skills</h1>
        <p>Below are a list of my tools and languages</p>
        <div className="skill-list">
          <ul className="skill-logo">
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Python</li>
            <li>Flask</li>
            <li>JavaScript</li>
            <li>Figma</li>
            <li>MySql</li>
            <li>Nginx</li>
            <li>DataDog</li>
            <li>TypeScript</li>
            <li>NextJs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
