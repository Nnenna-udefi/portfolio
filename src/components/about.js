import React from 'react';
// import SocialFollow from './SocialFollow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5, faJava, faWindows, faWordpress } from '@fortawesome/free-brands-svg-icons';
import ProgressBar from './ProgressBar';



  



function about() {
  
  return (
    <div id='about'>
      <div className='about-intro'>
      <h1> About Me</h1>
      <p> Nnenna Udefi is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to solve real world problems.</p>
      {/* <SocialFollow /> */}
      </div>



    <div className='skills'>
        <h1>My Skills</h1>
        <p>Here are a few skills I possess</p>
        <ul className='skill-list'>
          <div>
          <div className='skill-logo'>
            <FontAwesomeIcon icon = {faHtml5} size='2x' className='html-icon'/>
            <li>HTML</li>
            <div>
              <ProgressBar bgcolor = "#2351DC" completed= '90' /> 
              
            </div>
            
          </div>

          <div className='skill-logo'>
            <FontAwesomeIcon icon = {faJava} size='2x' className='html-icon'/>
            <li>JavaScript</li>
            <div>
            <ProgressBar bgcolor = "#2351DC" completed= '50' />
              
            </div>
            
          </div>

          <div className='skill-logo'>
            <FontAwesomeIcon icon = {faWindows} size='2x' className='html-icon'/> 
            <li>Microsoft Office</li>
            <div>
            <ProgressBar bgcolor = "#2351DC" completed= '80' />
             
            </div>
            
          </div>
          </div>


      <div>
          <div className='skill-logo'>
            <FontAwesomeIcon icon = {faWordpress} size='2x' className='html-icon'/>
            <li>Wordpress</li>
            <div>
            <ProgressBar bgcolor = "#2351DC" completed= '70' />
              
            </div>
            
          </div>

          <div className='skill-logo'>
            <FontAwesomeIcon icon = {faCss3Alt} size='2x' className='html-icon'/>
            <li>CSS</li>
            <div>
            <ProgressBar bgcolor = "#2351DC" completed= '80' />
              
            </div>
            
          </div>
          </div> 
        </ul>
      </div>
    </div>
  )
}


export default about
