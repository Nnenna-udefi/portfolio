import React from "react";
import Training from "../images/training.png";
import Responsive from "../images/responsive.png";
import Web from "../images/web-dev.png";
import useScrollReveal from "../hooks/useScrollReveal";

function Services() {
  useScrollReveal();

  return (
    <div id="services" className="services reveal">
      <h1>Services I Render</h1>
      <div className="service-page">
        <div className="service-block">
          <img src={Training} alt="" />
          <h2>Training</h2>
          <p>
            I offer instructor-led training in a way that fits with the way you
            work.{" "}
          </p>
        </div>
        <div className="service-block">
          <img src={Responsive} alt="" />
          <h2>Responsive Web design </h2>
          <p>
            I Help design Mobile-friendly, world class websites that helps
            scales your business and helps user experience get better.
          </p>
        </div>
        <div className="service-block">
          <img src={Web} alt="" />
          <h2>Web Development</h2>
          <p>
            I help create web based sites and ensure great experience for web
            users
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
