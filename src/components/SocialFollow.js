import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a
        href="https://www.linkedin.com/in/nnenna-udefi-237029222/"
        className="social"
        aria-label="Linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
      <a
        href="https://twitter.com/nnennaudefi"
        className="social"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a
        href="https://github.com/Nnenna-udefi"
        className="social"
        aria-label="Github"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" />
      </a>
    </div>
  );
}
