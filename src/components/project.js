import React from 'react';
import Roots from '../images/Roots.png';
import Sunnyside from '../images/sunnyside.jpg';
import travel from '../images/travelc.png';
import Easycare from '../images/easycare.jpg'
// import { Link } from 'react-router-dom';


  


function project() {
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

window.addEventListener("scroll", project);

  return (
    <div id='project' className='project'>
      <h1>Milestones of Projects</h1>
      
      <p className='project-p'>I do most of my work under contract but I tend to freelance from time to time or build projects for fun. Here are a few people & projects I've partnered and worked on: </p>
      
      <div className='pro-img'>
        
      <div className='img-project reveal'>
            <img src= {Easycare} alt=''/>
            <div className='project-text'>
              <p>I was contracted to build the website for an agency that connects care givers to people especially the elderly who needs their services. It was a 6-page project I worked on with a team.</p>
              <ul className='project-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <a href = 'https://easycare-n.vercel.app/'><button className='project-btn'>VISIT SITE</button></a>

                
              </div>
          </div>

<hr/>
            <div className='img-project reveal'>
            <div className='project-text'>
                <p>This site was built for a restaurant named Roots and Cafe. It was 3 page site built with Reactjs framework.</p>
                <ul className='project-list'>
                 <li>HTML</li>
                  <li>CSS</li>
                  <li>REACT JAVASCRIPT</li>
                </ul>
                <a href="https://restaurant-website-woad.vercel.app"><button className='project-btn'>VISIT SITE</button></a>
        
              </div>
              
              <img src={Roots} alt=''/>
            </div>

<hr/>
            <div className='img-project reveal'>
              <img src={Sunnyside} alt='' />

              <div className='project-text'>
                <p>Built with tailwind CSS and HTML5 </p>
                <ul className='project-list'>
                <li>HTML</li>
                  <li>TAILWIND CSS</li>
                  <li>JAVASCRIPT</li>
                  </ul>
                <a href = 'https://sunnyside-agency-card-capstone-project.vercel.app' ><button className='project-btn'>VISIT SITE</button></a>
              
               
              </div>
            </div>
        
  <hr/>      
          <div className='img-project reveal'>

          <div className='project-text'>
              <p> This is a travel agency site built with React JS framework and CSS grid</p>
              <ul className='project-list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>REACT JAVASCRIPT</li>
                </ul>
                <a href = 'https://artic-travel.netlify.app/'><button className='project-btn'>VISIT SITE</button></a>
              
              </div>

            <img src = {travel} alt= '' />
            
          </div>

          <hr/>

       
      

      </div>
    </div>
  )
}

export default project