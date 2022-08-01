import React from 'react'
import SocialFollow from './SocialFollow';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'


function contact() {

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

window.addEventListener("scroll", contact);

  return (
    <div id='contact' className='contact reveal'>
      <div className='contact-get'>
        <h1>Get In Touch</h1>
        <p className='contact-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
        <SocialFollow />
        <div className='Email'>
          <FaEnvelope className='envelope'/>
          <div>
          <p>nnennaudefi@gmail.com</p>
          <p className='Email-p'>Send a message Anytime!</p>
          </div>
         
        </div>

        <div className='Email'>
          <FaPhoneAlt className='phone' primary-color='#2351DC'/>
          <div>
          <p>+234 - 903- 744 -4013</p>
          <p className='Email-p'>Send a message Anytime!</p>
          </div>
      
        </div>
      </div>

      <div className='contact-msg'>
        <h3>Need A Service?</h3>
        <h2>Send A Message</h2>
        <form>
          <input type='name' placeholder='Enter FullName' />
          <br />
          <input type='email' placeholder='Enter Email Address' />
          <br />
          <textarea placeholder='Write A Message'></textarea>
          <br />
          <button className='contact-btn'>Send A Message</button>
 
        </form>
      </div>
    </div>
  )
}

export default contact