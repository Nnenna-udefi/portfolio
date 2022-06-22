import React from 'react';
import Roots from '../images/Roots.png';
import Sunnyside from '../images/sunnyside.jpg';
import travel from '../images/travelc.png';
import Easycare from '../images/easycare.jpg'
// import { Link } from 'react-router-dom';


  


function project() {
  return (
    <div id='project' className='project'>
      <h1>Milestones of Projects</h1>
      <p>Here are a few people & projects I've partnered and worked on</p>
      <div className='pro-img'>
        <div className='project-img'>
            <div className='img-project'>
              <img src={Roots} alt=''/>
              <div classname='igLink'>
                <a href = 'https://restaurant-website-woad.vercel.app' className='lin'>Learn More</a>
              </div>
            </div>
            <div className='img-project'>
              <img src={Sunnyside} alt='' />
              <div classname='igLink'>
                <a href = 'https://sunnyside-agency-card-capstone-project.vercel.app' className='lin'>Learn More</a>
              </div>
            </div>
        </div>
        <div className='project-img'>
          <div className='img-project'>
            <img src = {travel} alt= '' />
            <div classname='igLink'>
                <a href = 'https://artic-travel.netlify.app/' className='lin'>Learn More</a>
              </div>
          </div>
          <div className='img-project'>
            <img src= {Easycare} alt=''/>
            <div classname='igLink'>
                <a href = 'https://easycare-n.vercel.app/' className='lin'>Learn More</a>
              </div>
          </div>

        </div>
      

      </div>
    </div>
  )
}

export default project