import React, {useRef} from 'react'
import SocialFollow from './SocialFollow';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_24odjxc', 'template_pktijdr', form.current, 'NkDhNVNeK1kv9BsGy')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message sent Successfully'
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops, something went wrong',
            text: error.text
          })
      });
      e.target.reset()
  };
 
  

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

window.addEventListener("scroll", Contact);

  return (
    <div id='contact' className='contact reveal'>
      <div className='contact-get'>
        <h1>Get In Touch</h1>
        
        <SocialFollow />
        <div className='Email'>
          <FaEnvelope className='envelope'/>
          <div>
          <p>miriamudefi@gmail.com</p>
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

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Enter FullName' name='name' />
          <br />
          <input type='email' placeholder='Enter Email Address' name = 'email'/>
          <br />
          <textarea placeholder='Write A Message' name = 'message'></textarea>
          <br />
          <button className='contact-btn'>Send A Message</button> 
 
        </form>
      </div>
    </div>
  )
}

export default Contact