import React from 'react';
import Roots from '../images/Roots.png';
import Sunnyside from '../images/sunnyside.jpg';
import travel from '../images/travelc.png';
import Easycare from '../images/easycare.jpg'

function handleMouseEnter(e) {
  console.log(e.target);
  
}

function project() {
  return (
    <div id='project' className='project'>
      <h1>Milestones of Projects</h1>
      <p>Here are a few people & projects I've partnered and worked on</p>
      <div className='pro-img'>
        <div className='project-img'>
            <div className='img-project'>
              <img src={Roots} alt='' onMouseEnter={handleMouseEnter} />
            </div>
            <div className='img-project'>
              <img src={Sunnyside} alt='' />
            </div>
        </div>
        <div className='project-img'>
          <div className='img-project'>
            <img src = {travel} alt= '' />
          </div>
          <div className='img-project'>
            <img src= {Easycare} alt=''/>
          </div>

        </div>
      

      </div>
    </div>
  )
}

export default project