import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import "./social-list.css"

export default function(props) {
  return (
    <ul className="social-list">
      <li>
        <a
          href={`https://github.com/${props.social.github}`}
          rel="noreferrer"
          target="_blank"
          style={{ opacity: 0.5 }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            color="var(--footer-text)"
          />
        </a>
      </li>
      <li>
        <a
          href={`https://www.linkedin.com/in/${props.social.linkedin}`}
          rel="noreferrer"
          target="_blank"
          style={{ opacity: 0.5 }}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            color="var(--footer-text)"
          />
        </a>
      </li>
      <li>
        <a
          href={`https://twitter.com/${props.social.twitter}`}
          rel="noreferrer"
          target="_blank"
          style={{ opacity: 0.5 }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            color="var(--footer-text)"
          />
        </a>
      </li>
      <li>
        <a
          href={`https://www.instagram.com/${props.social.instagram}`}
          rel="noreferrer"
          target="_blank"
          style={{ opacity: 0.5 }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="lg"
            color="var(--footer-text)"
          />
        </a>
      </li>
      <li>
        <a href={`mailto:${props.social.email}`} style={{ opacity: 0.5 }}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size="lg"
            color="var(--footer-text)"
          />
        </a>
      </li>
    </ul>
  )
}
