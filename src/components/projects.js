import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { ThemeContext } from "./layout"
import Tags from "./tags"
import Card, { CardHeader, CardContent } from "./card"
import "./projects.css"

export default function(props) {
  const theme = React.useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query {
      cc: file(absolutePath: { regex: "/cc.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vl: file(absolutePath: { regex: "/vl.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sc: file(absolutePath: { regex: "/sc.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pl: file(absolutePath: { regex: "/pl.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      eh: file(absolutePath: { regex: "/eh.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dt: file(absolutePath: { regex: "/dt.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const color = "var(--project-container-color)"

  return (
    <div className="projects-wrapper">
      <div className="projects-cards-wrapper">
        <a href="https://presidio.com" rel="noreferrer" target="_blank">
          <Card classes="projects-card" color={color}>
            <CardHeader
              classes="projects-card-header-content"
              title="Cloud Concierge"
              titleClass="projects-card-header projects-item-spacing"
            />
            <CardContent classes="projects-card-content">
              <div style={{ marginBottom: "5rem" }}>
                <p style={{ marginBlockStart: 0 }}>
                  Large scale cloud infrastructure management. Built over three
                  years with a team distributed around different countries. We
                  built this for our client presidio.
                </p>
                <Tags
                  tags={[
                    "React.js",
                    "Redux",
                    "Material-UI",
                    "Node.js",
                    "socket-io",
                    "meteor.js",
                    "mongodb",
                    "loopback",
                    "Express.js",
                  ]}
                ></Tags>
              </div>
              {data.cc && (
                <Image fixed={data.cc.childImageSharp.fixed} alt={""} />
              )}
            </CardContent>
          </Card>
        </a>
      </div>
      <div className="projects-cards-wrapper">
        <a href="https://presidio.com" rel="noreferrer" target="_blank">
          <Card classes="projects-card" color={color}>
            <CardHeader
              classes="projects-card-header-content"
              title="Virtual Lobby"
              titleClass="projects-card-header projects-item-spacing"
            />
            <CardContent classes="projects-card-content">
              <div style={{ marginBottom: "5rem" }}>
                <p style={{ marginBlockStart: 0 }}>
                  Large scale cloud analysis and reporting application. Built
                  over 2 years with a team distributed around different
                  countries. We built this for our client presidio.
                </p>
                <Tags
                  tags={[
                    "React.js",
                    "pluralsight",
                    "React-Apollo",
                    "mongodb",
                    "Express.js",
                  ]}
                ></Tags>
              </div>
              {data.vl && (
                <Image fixed={data.vl.childImageSharp.fixed} alt={""} />
              )}
            </CardContent>
          </Card>
        </a>
      </div>
      <div className="projects-cards-wrapper">
        <a href="https://github.com/nouman91/Scoreboard-dev" rel="noreferrer" target="_blank">
          <Card classes="projects-card" color={color}>
            <CardHeader
              classes="projects-card-header-content"
              title="scoreboard"
              titleClass="projects-card-header projects-item-spacing"
            />
            <CardContent classes="projects-card-content">
              <div style={{ marginBottom: "5rem" }}>
                <p style={{ marginBlockStart: 0 }}>
                  Volleyball scoreboard manager. Capable of organizing matches
                  around differ venues and displaying scores on large screens
                </p>
                <Tags
                  tags={["Angular.js", "bootstrap", "MySQL", "Express.js"]}
                ></Tags>
              </div>
              {data.sc && (
                <Image fixed={data.sc.childImageSharp.fixed} alt={""} />
              )}
            </CardContent>
          </Card>
        </a>
      </div>
      <div className="projects-cards-wrapper">
        <a href="https://schellbrothers.com/" rel="noreferrer" target="_blank">
          <Card classes="projects-card" color={color}>
            <CardHeader
              classes="projects-card-header-content"
              title="pulse"
              titleClass="projects-card-header projects-item-spacing"
            />
            <CardContent classes="projects-card-content">
              <div style={{ marginBottom: "5rem" }}>
                <p style={{ marginBlockStart: 0 }}>
                  CRM application for our client Schell Brothers. I lead this
                  project with a team of 12 personals
                </p>
                <Tags
                  tags={["React.js", "React-Apollo", "bootstrap", "MySQL"]}
                ></Tags>
              </div>
              {data.pl && (
                <Image fixed={data.pl.childImageSharp.fixed} alt={""} />
              )}
            </CardContent>
          </Card>
        </a>
      </div>
      <div className="projects-cards-wrapper">
          <Card classes="projects-card" color={color}>
            <CardHeader
              classes="projects-card-header-content"
              title="Data Table"
              titleClass="projects-card-header projects-item-spacing"
            />
            <CardContent classes="projects-card-content">
              <div style={{ marginBottom: "5rem" }}>
                <p style={{ marginBlockStart: 0 }}>
                  Custom data table library. Extensible for displaying any kind
                  of data with the support of filtration, searching, sorting,
                  and custom actions. 
                  *I will publish this on npm soon.
                </p>
                <Tags tags={["React.js"]}></Tags>
              </div>
              {data.dt && (
                <Image fixed={data.dt.childImageSharp.fixed} alt={""} />
              )}
            </CardContent>
          </Card>
      </div>
    </div>
  )
}
