import React from "react"

import { ThemeContext } from "./layout"
import Card, { CardHeader, CardContent } from "./card"

import "./sections.css"
import Skills from "./skills"
import Projects from "./projects"

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
              I have many years of experience in developing complex web/cloud
              applications. I love building complex applications. I can help you
              in creating complex architecture, planning projects, selecting best
              tech stack and building applications. I also write blog posts, but
              enough about me, how can I help you?
            </p>
            <a href="mailto:noumanwaheed91@gmail.com">
              noumanwaheed91@gmail.com
            </a>
          </header>
          <div
            id={`home-${theme}`}
            style={{
              backgroundColor:
                theme === "light" ? "rgb(255, 229, 214)" : "transparent",
              textAlign: "center",
              border: "var(--section-border)",
            }}
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
            <p style={{ fontSize: "28px"}}>
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
      <section className="section-wrapper" id={`skills-${theme}`}>
        <div className="container">
          <div
            className="section-content-manager"
            style={{
              backgroundColor: theme === "light" ? "#e0f3fa" : "transparent",
              border: "var(--section-border)",
            }}
          >
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
      <section className="section-wrapper" id={`projects-${theme}`}>
        <div className="container">
          <div
            className="section-content-manager"
            style={{
              backgroundColor: theme === "light" ? "#fff2d7" : "transparent",
              border: "var(--section-border)",
            }}
          >
            <div className="section-highlight">
              <h2>Projects</h2>
              <p className="subheading">Some of my large scale projects.</p>
            </div>
            <div className="section-content">
              <Projects />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
