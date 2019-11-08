import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import SocialLinks from "./social-links"
import Form from "./form";

import "./footer.css"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query myself {
      site {
        siteMetadata {
          author
          title
          description
          social {
            twitter
            github
            instagram
            linkedin
            email
          }
        }
      }
    }
  `)
  return (
    <div className="footer-container">
      <ul className="footer-nav">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-me"}>About me</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          color: "var(--footer-text)",
        }}
      >
        <div className="footer-form">
          <div className="footer-form-content">
            <h2 style={{marginTop:"0"}}>Get in touch</h2>
            <p>Write me an email at address below or use this form</p>
            <a
              href={`mailto:${data.site.siteMetadata.social.email}`}
              style={{ color: "inherit" }}
            >
              {data.site.siteMetadata.social.email}
            </a>
          </div>
          <div className="footer-form-content">
            <Form />
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "flex-start" }}>
      <SocialLinks
        social={data.site.siteMetadata.social}
      />
      </div>
    </div>
  )
}
