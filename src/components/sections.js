import React from "react"

import { ThemeContext } from "./layout"
import Card, { CardHeader, CardContent } from "./card"

import "./sections.css"
import Skills from "./skills"

export default function(props) {
  const theme = React.useContext(ThemeContext)

  return (
    <>
      <section>
          <div className="container">
        <header style={{ maxWidth: "30rem" }}>
          <h2>
            Hey there, my name is Nouman Waheed I am award winning software
            engineer from Islamabad.
          </h2>
          <p>
            I love connecting brands and companies with their customers through
            good design, I can help you with logo, identity & digital design. I
            teach design on skillshare and I post very often on dribbble, but
            enough about me, how can I help you?
          </p>
          <a href="mailto:noumanwaheed91@gmail.com">noumanwaheed91@gmail.com</a>
        </header>
        <div
          style={{ backgroundColor: "rgb(255, 229, 214)", textAlign: "center" }}
          className="section-wrapper"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></div>
          <p style={{ fontWeight: 600 }}>
            "Nouman is simply put, a rock star! He is a consummate software
            professional with a personable disposition."
          </p>
          <h4 style={{ margin: 0 }}>Sohail Bhamani</h4>
          <span style={{ color: "var(--testimonial-light-color)" }}>
            Senior IT Professional
          </span>
        </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="container">
          <div className="section-content-manager" style={{ backgroundColor: "#e0f3fa" }}>
            <div className="section-highlight">
              <h2>Skills</h2>
              <p className="subheading">My core techincal skills.</p>
            </div>
            <div className="section-content">
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrapper">
        <div className="container">
          <div className="section-content-manager" style={{ backgroundColor: "#fff2d7" }}>
            <div className="section-highlight">
              <h2>Projects</h2>
              <p className="subheading">Some of my large scale projects.</p>
            </div>
            <div className="section-content">
              <Skills />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
