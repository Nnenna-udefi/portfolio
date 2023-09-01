import React, {useEffect} from 'react';
import Training from '../images/training.png';
import Responsive from '../images/responsive.png';
import Web from '../images/web-dev.png';

function Services() {
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
    <div id='services' className='services reveal'>
      <h1>Services I Render</h1>
      <div className='service-page'>
        <div className='service-block'>
          <img src={Training} alt='' />
          <h2>Training</h2>
          <p>I offer instructor-led training in a way that fits with the way you work. </p>
        </div>
        <div className='service-block'>
          <img src={Responsive} alt='' />
          <h2>Responsive Web design </h2>
          <p>I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.</p>
        </div>
        <div className='service-block'>
          <img src={Web} alt='' />
          <h2>Web Development</h2>
          <p>I help create web based sites and ensure great experience for web users</p>
        </div>
      </div>
    </div>
  )
}

export default Services