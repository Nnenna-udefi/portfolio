import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/nnenna-udefi-237029222/" className="linkedin-social">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      <a href="https://twitter.com/nnennaudefi" className="twitter-social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      
    </div>
  );
}