import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "./social-list.css";

export default function(props) {

  return (
    <ul className="social-list">
      <li>
        <a href={`https://github.com/${props.social.github}`} target="_blank">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </li>
      <li>
        <a
          href={`https://www.linkedin.com/in/${props.social.linkedin}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </li>
      <li>
        <a href={`https://twitter.com/${props.social.twitter}`} target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
        </a>
      </li>
      <li>
        <a
          href={`https://www.instagram.com/${props.social.instagram}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
      </li>
      <li>
        <a
          href={`mailto:${props.social.email}`}
        >
          <FontAwesomeIcon icon={faPaperPlane} size="lg" />
        </a>
      </li>
    </ul>
  )
}
