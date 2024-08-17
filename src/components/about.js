import React from "react";
import Profile from "../images/nnenna.jpg";
import useScrollReveal from "../hooks/useScrollReveal";

function About() {
  useScrollReveal();

  return (
    <div id="about">
      <div className="about-intro">
        <div>
          <h1>About Me</h1>
          <p>
            I'm a Front End Developer from Nigeria with a strong passion for
            creating responsive and accessible websites.{" "}
          </p>
          <p>
            Since diving into programming in 2022, I've had the privilege of
            collaborating with talented teams on diverse projects, where I
            applied my skills in HTML, CSS, JavaScript, and modern frameworks
            and Libraries like React, NextJs.
          </p>
          <p>
            My goal is to leverage technology to solve real-world problems and
            deliver user-centric digital solutions.
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
            <li>TailwindCss</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
