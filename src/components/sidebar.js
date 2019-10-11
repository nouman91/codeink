import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import { rhythm } from "../utils/typography"
import "./sidebar.css"

export default function(props) {
  const data = useStaticQuery(graphql`
    query ME {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            instagram
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="sidebar">
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt=""
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <h4>{author}</h4>
        <p style={{ color: "#888" }}>
        A JavaScript enthusiast with 5+ years of experience in React, Graphql, Node.js, and Express, etc.
        </p>
        <hr />
        <nav>
          <ul className="menu-list">
            <li>
              <Link to={"/"} activeClassName="menu-link-active">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about-me"} activeClassName="menu-link-active">
                About me
              </Link>
            </li>
          </ul>
        </nav>
        <hr style={{ marginBottom: 0 }} />
        <ul className="social-list">
          <li>
            <a href={`https://github.com/${social.github}`} target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
          <li>
            <a
              href={`https://www.linkedin.com/in/${social.linkedin}`}
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/${social.twitter}`} target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </li>
          <li>
            <a href={`https://www.instagram.com/${social.instagram}`} target="_blank">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
