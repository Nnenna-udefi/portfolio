import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import About from './about';
import Project from './project';
import Services from './services';
import Contact from './contact';
import SocialFollow from './SocialFollow';
import Amy from '../images/Amy.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import ReactSwitch from "react-switch";
import { useState } from 'react';
import { createContext } from 'react';


export const ThemeContext = createContext(null);

function Home() {
    const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    //if the currrent theme is light i want to set it to dark, then if its light set it to dark 
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

            <div>
            {/* <SocialFollow /> */}
            </div>
            <div className='switch'>
                <label>{ theme === "light" ? "Light Mode" : "Dark Mode" }</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
            </div>
        </div>

        <div className='intro-flex'>
            <div className='intro'>
                <p className='hi'>Hi There</p>
                <p className='introduction'>I Am Nnenna Udefi</p>
                <p className='title'> A Top-Notch Front-End Developer</p>
                <div>
                <SocialFollow />
                </div>
                
            </div>
           
            
        </div>
        <About />
        <Services />
        <Project />
        <div className='testimonies'>
            <div className='testimonies-title'>
                <h1>Testimonies & Recommendations</h1>
            </div>

            <div className='rec'>

            <div className='recommendation'>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Nnenna gets things done. She is very passionate about what he does and she's always fun to be with.</p>
                </div>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Nnenna gets things done. She is very passionate about what he does and she's always fun to be with.</p>
                </div>
            </div>
            <div className='recommendation'>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Nnenna gets things done. She is very passionate about what he does and she's always fun to be with.</p>
                </div>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Nnenna gets things done. She is very passionate about what he does and She's always fun to be with.</p>
                </div>
            </div>
            </div>
        </div>

        <Contact />

        <footer>
            <h1>Nnenna Udefi</h1>
            <a href="https://www.linkedin.com/in/nnenna-udefi-237029222/">
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