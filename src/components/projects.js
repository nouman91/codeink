import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { ThemeContext } from "./layout"
import Tags from "./tags"
import Card, { CardHeader, CardContent } from "./card"
import "./projects.css"

const NonStretchedImage = props => {
  let normalizedProps = props
  
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
      },
    }
  }

  return <Image {...normalizedProps} />
}

export default function(props) {
  const theme = React.useContext(ThemeContext)

  const data = useStaticQuery(graphql`
    query {
      cc: file(absolutePath: { regex: "/cc.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      eh: file(absolutePath: { regex: "/eh.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      vl: file(absolutePath: { regex: "/vl.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      sc: file(absolutePath: { regex: "/sc.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      pl: file(absolutePath: { regex: "/pl.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      dt: file(absolutePath: { regex: "/dt.png/" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
            presentationWidth
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
              <div style={{ marginBottom: "4rem" }}>
                <p style={{ marginBottom: 0 }}>
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
              {data.cc && <NonStretchedImage {...data.cc.childImageSharp} />}
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
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ marginBottom: 0 }}>
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
                <NonStretchedImage {...data.vl.childImageSharp} />
              )}
            </CardContent>
          </Card>
        </a>
      </div>
      <div className="projects-cards-wrapper">
        <a
          href="https://github.com/nouman91/Scoreboard-dev"
          rel="noreferrer"
          target="_blank"
        >
          <Card classes="projects-card" color={color}>
            <CardHeader
              classes="projects-card-header-content"
              title="scoreboard"
              titleClass="projects-card-header projects-item-spacing"
            />
            <CardContent classes="projects-card-content">
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ marginBottom: 0 }}>
                  Volleyball scoreboard manager. Capable of organizing matches
                  around differ venues and displaying scores on large screens
                </p>
                <Tags
                  tags={["Angular.js", "bootstrap", "MySQL", "Express.js"]}
                ></Tags>
              </div>
              {data.sc && (
                <NonStretchedImage {...data.sc.childImageSharp} />
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
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ marginBottom: 0 }}>
                  CRM application for our client Schell Brothers. I lead this
                  project with a team of 12 personals
                </p>
                <Tags
                  tags={["React.js", "React-Apollo", "bootstrap", "MySQL"]}
                ></Tags>
              </div>
              {data.pl && (
                <NonStretchedImage {...data.pl.childImageSharp} />
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
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ marginBottom: 0 }}>
                Custom data table library. Extensible for displaying any kind of
                data with the support of filtration, searching, sorting, and
                custom actions. 
                *I will publish this on npm soon.
              </p>
              <Tags tags={["React.js"]}></Tags>
            </div>
            {data.dt && (
              <NonStretchedImage {...data.dt.childImageSharp} />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
