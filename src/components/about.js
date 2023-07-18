import React, { useEffect } from 'react';
import Profile from '../images/nnenna-img.jpeg';



function About() {
  useEffect(() => {
    const handleScroll = () => {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

     // Clean up the event listener on component unmount
     return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id='about'>
      <div className='about-intro'>
      
      <div>  
      <h1>About Me</h1>
        <p>I'm a Front End Developer from Nigeria.</p>
        <p>A passionate and goal driven Techpreneur whose interest is in using technology to build solutions to solve real world problems.</p>
        <p>I love building websites with responsive designs which also focuses on accesibility. I got into programming in 2021 and since then I have had the opportunity to work with amazing people and on diverse projects.</p>
      </div>
      <div>
        <img src={Profile} alt='profile-img' className='profile' />
      </div>

      
      </div>



    <div className='skills reveal'>
        <h1>My Skills</h1>
        <p>Below are a list of my tools and languages</p>
        <ul className='skill-list'>
          <div className='skill-logo'>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Python</li>
            <li>Wordpress</li>
            <li>Flask</li>
            <li>JavaScript</li>
            <li>Figma</li>
            <li>MySql</li>
            <li>Nginx</li>
            <li>DataDog</li>

          </div> 
        </ul>
      </div>
    </div>
  )
}


export default About
