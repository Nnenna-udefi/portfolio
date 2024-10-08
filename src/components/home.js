import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import About from "./about";
import Project from "./project";
import Services from "./services";
import Contact from "./contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { createContext } from "react";
import { Typewriter } from "./typewriter";

export const ThemeContext = createContext(null);

function Home() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id={theme}>
        <div className="Navbar">
          <div>
            <h1 className="logo">Nnenna Udefi.</h1>
          </div>

          <ul className="nav-list">
            <Link to="#about" smooth className="link-nav">
              <li className="nav-link">About Me</li>
            </Link>
            <Link to="#services" smooth className="link-nav">
              <li className="nav-link">Services</li>
            </Link>
            <Link to="#project" smooth className="link-nav">
              <li className="nav-link">Projects</li>
            </Link>
            <Link to="#contact" smooth className="link-nav">
              <li className="nav-link">Contact me</li>
            </Link>
          </ul>

          <div className="switch">
            <label className="switch-label">
              {theme === "light" ? "🌙" : "🔆"}
            </label>
            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "dark"}
              className="buttonTheme"
            />
          </div>
        </div>

        <div className="intro-flex">
          <div className="intro">
            <p className="hi">Hi There,</p>
            <p className="introduction">
              <Typewriter text="my name is Nnenna Udefi" delay={100} />
            </p>
            <p className="title">
              {" "}
              <Typewriter
                text=" I'm a software engineer specialized in building Frontend
              applications, occasionally backend too. I take pride in my work
              and ensure I deliver the fastest, most accessible and most
              responsive application possible."
                delay={30}
                startDelay={3000}
              />
            </p>
            <div>
              <a
                href="https://docs.google.com/document/d/1NC8cayCBMLeWXh_-rYeRwu0XttaQgd5EvhuPawbvLmc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="download_btn"
              >
                RESUME
              </a>
            </div>
          </div>
        </div>
        <About />
        <Services />
        <Project />
        <Contact />

        <footer>
          <h1>Nnenna Udefi</h1>
          <a
            href="https://www.linkedin.com/in/nnenna-udefi/"
            aria-label="Linkedin"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="footer-icon"
            />
          </a>
          <a href="https://twitter.com/nnennaudefi" aria-label="Twitter">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className="footer-icon"
            />
          </a>
          <a href="https://github.com/Nnenna-udefi" aria-label="Github">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="footer-icon"
            />
          </a>
          <p> CopyRight @ 2022 | All rights reserved</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default Home;
