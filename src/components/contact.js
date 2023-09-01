import React, {useEffect, useRef} from 'react'
import SocialFollow from './SocialFollow';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


function Contact() {
  const form = useRef();
 

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
 
  
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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
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
        
        <h2>Need A Service?</h2>
        <h3>Send A Message</h3>

        <form ref={form} onSubmit={sendEmail}>
          <label for='name' className='visually-hidden'>Enter Full details</label><br/>
          <input type='text' placeholder='Enter FullName' name='name' required id='name' />
          <br />
          <input type='email' placeholder='Enter Email Address' name = 'email' required/>
          <br />
          <textarea placeholder='Write A Message' name = 'message' required></textarea>
          <br />
          <button className='contact-btn'>Send A Message</button> 
 
        </form>
      </div>
    </div>
  )
}

export default Contact