import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import About from './about';
import Project from './project';
import Services from './services';
import Contact from './contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactSwitch from "react-switch";
import { useState } from 'react';
import { createContext } from 'react';
import nnennaUdefiCV from '../NNENNA_UDEFI_CV.pdf';


export const ThemeContext = createContext(null);

function Home() {
    const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    //if the currrent theme is light i want to set it to dark, then if its dark set it to light 
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div id = {theme}>
        <div className='Navbar'>
            <div>
                <h1 className='logo'>Nnenna Udefi.</h1>
            </div>
            
            <ul className='nav-list'>
                <Link to = '#about' smooth className='link-nav'>
                    <li className='nav-link'>About Me</li></Link>
                <Link to = '#services' smooth className='link-nav'>
                    <li className='nav-link'>Services</li>
                </Link>
                <Link to = '#project' smooth className='link-nav'>
                    <li className='nav-link'>Projects</li>
                </Link>
                <Link to = '#contact' smooth className='link-nav'>
                    <li className='nav-link'>Contact me</li>
                </Link>
            </ul>

           
            <div className='switch'>
            <label className='switch-label'>
                { theme === "light" ? "🌙" : "🔆" }
            </label>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className='buttonTheme'/>
            
            </div>
        </div>

        <div className='intro-flex'>
            <div className='intro'>
                <p className='hi'>Hi There,</p>
                <p className='introduction'><span className='name'>my name is </span>Nnenna Udefi</p>
                <p className='title'> I'm a software engineer specialized in building Frontend applications, occasionally backend too. I take pride in my work and ensure I deliver the fastest, most accessible and most responsive application possible.</p>
                <div>
                    <a href={nnennaUdefiCV} download="NnennaUdefiResume" 
                    target="_blank" rel="noreferrer">
                        <button className='download_btn'>RESUME</button>
                    </a>
                {/* <SocialFollow /> */}
                </div>
                
            </div>
           
            
        </div>
        <About />
        <Services />
        <Project />
        <Contact />

        <footer>
            <h1>Nnenna Udefi</h1>
            <a href="https://www.linkedin.com/in/nnenna-udefi/">
                <FontAwesomeIcon icon = {faLinkedin} size='1.5x' className='footer-icon' />
            </a>
            <a href="https://twitter.com/nnennaudefi" >
                <FontAwesomeIcon icon = {faTwitter} size='1.5x' className='footer-icon'/>
            </a>
            <a href="https://github.com/Nnenna-udefi" >
          <FontAwesomeIcon icon={faGithub} size="1.5x" className="footer-icon"/>
      </a>
            <p> CopyRight @ 2022 | All rights reserved</p>
        </footer>
        
        </div>
        </ThemeContext.Provider>
  )
}

export default Home