import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/nnenna-udefi-237029222/" className="social">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      <a href="https://twitter.com/nnennaudefi" className="social">
          <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://github.com/Nnennaudefi" className="social">
          <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>

      
    </div>
  );
}