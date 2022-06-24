import React from 'react'
import {HashLink as Link} from 'react-router-hash-link';
import About from './about';
import Project from './project';
import Services from './services';
import Contact from './contact';
import SocialFollow from './SocialFollow';
import Amy from '../images/Amy.jpg';
// import Profile from '../images/profile.JPG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
                <h1>Nnenna Udefi.</h1>
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
            <SocialFollow />
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
                <SocialFollow />
            </div>
            <div>
            {/* <img src={Profile} alt='' /> */}
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
                    <p>Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
            </div>
            <div className='recommendation'>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
                <div className='recommendation-block'>
                    <img src={Amy} alt='' />
                    <h3>Osuamkpe Amy</h3>
                    <p>Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
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
            <p> CopyRight @ 2022 | All rights reserved</p>
        </footer>
        
        </div>
        </ThemeContext.Provider>
  )
}

export default Home