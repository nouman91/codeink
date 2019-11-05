import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJsSquare, faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faCode, faSitemap } from "@fortawesome/free-solid-svg-icons"

import { ThemeContext } from "./layout"
import Tags from "./tags"
import Card, { CardHeader, CardContent } from "./card"
import "./skills.css"

export default function(props) {
  const theme = React.useContext(ThemeContext)

  return (
    <div className="skills-wrapper">
      <div className="skills-cards-wrapper">
        <Card classes="skills-card">
          <CardHeader
            classes="skills-card-header-content"
            title="JavaScript"
            avatar={
              <FontAwesomeIcon
                className="skills-item-spacing skills-avatar-placement"
                icon={faJsSquare}
                size="2x"
                aria-hidden={true}
                style={{ marginBottom: "2rem" }}
              />
            }
            titleClass="skills-card-header skills-item-spacing"
            subTitleClass="skills-item-spacing"
            avatarClass="skills-item-spacing"
          />
          <CardContent classes="skills-card-content">
            <p style={{ margin: 0 }}>
              I have over six years of experience in JavaScript. I extensively
              study it and develop applications in it.
            </p>
            <Tags tags={["React.js", "Redux", "React-Apollo"]}></Tags>
          </CardContent>
        </Card>
      </div>
      <div className="skills-cards-wrapper">
        <Card classes="skills-card">
          <CardHeader
            classes="skills-card-header-content"
            title="HTML/CSS"
            avatar={
              <FontAwesomeIcon
                className="skills-item-spacing skills-avatar-placement"
                icon={faCode}
                size="2x"
                aria-hidden={true}
              />
            }
            titleClass="skills-card-header skills-item-spacing"
            subTitleClass="skills-item-spacing"
            avatarClass="skills-item-spacing"
          />
          <CardContent classes="skills-card-content">
            <p style={{ margin: 0 }}>
              I am highly experienced in latest UI tools/technologies. I also have
              extensive experience in design systems.
            </p>
            <Tags
              tags={[
                "HTML5",
                "CSS Modules",
                "SASS",
                "Bulma",
                "Tailwind",
                "Material-UI",
                "Antd",
                "Bootstrap",
              ]}
            ></Tags>
          </CardContent>
        </Card>
      </div>
      <div className="skills-cards-wrapper">
        <Card classes="skills-card">
          <CardHeader
            classes="skills-card-header-content"
            title="Node.js"
            avatar={
              <FontAwesomeIcon
                className="skills-item-spacing skills-avatar-placement"
                icon={faNodeJs}
                size="2x"
                aria-hidden={true}
              />
            }
            titleClass="skills-card-header skills-item-spacing"
            subTitleClass="skills-item-spacing"
            avatarClass="skills-item-spacing"
          />
          <CardContent classes="skills-card-content">
            <p style={{ margin: 0 }}>
              I have over 6 years of experience in Node.js. I have worked with almost all of
              node.js frameworks/libraries.
            </p>
            <Tags
              tags={["Express.js", "Hapi.js", "loopback", "Apollographql"]}
            ></Tags>
          </CardContent>
        </Card>
      </div>
      <div className="skills-cards-wrapper">
        <Card classes="skills-card">
          <CardHeader
            classes="skills-card-header-content"
            title="Architecture"
            avatar={
              <FontAwesomeIcon
                className="skills-item-spacing skills-avatar-placement"
                icon={faSitemap}
                size="2x"
                aria-hidden={true}
              />
            }
            titleClass="skills-card-header skills-item-spacing"
            subTitleClass="skills-item-spacing"
            avatarClass="skills-item-spacing"
          />
          <CardContent classes="skills-card-content">
            <p style={{ margin: 0 }}>
              I have extensively worked on complex applications. I have also
              studied on architecture for both front-end and
              back-end.
            </p>
            <Tags
              tags={[
                "Microservices",
                "REST Based",
                "GRAPHQL Based",
                "Micro-frontends",
              ]}
            ></Tags>
          </CardContent>
        </Card>
      </div>
    </div>
    // <div className="skills-wrapper">
    //   <div className="skills-cards-wrapper" style={{backgroundColor:"var(--card-outer-background)"}}>
    // <Card color={theme==="light"?"#ffe5d6":"var(--bg)"} classes="skills-card">
    //   <CardHeader
    //     classes="skills-card-header-content"
    //     title="JavaScript"
    //     subtitle="(6+ years)"
    //     avatar={
    //       <FontAwesomeIcon
    //         className="skills-item-spacing"
    //         icon={faJsSquare}
    //         size="2x"
    //         aria-hidden={true}
    //       />
    //     }
    //     titleClass="skills-card-header skills-item-spacing"
    //     subTitleClass="skills-item-spacing"
    //     avatarClass="skills-item-spacing"
    //   />
    //   <CardContent classes="skills-card-content">
    //     <p>
    //       Lorem Ipsum is simply dummy text of the printing and typesetting
    //       industry. Lorem Ipsum has been the industry's standard dummy text
    //       ever since the 1500s
    //     </p>
    //     <Tags tags={["React.js", "Redux", "React-Apollo"]}></Tags>
    //   </CardContent>
    // </Card>
    //   </div>

    //   <div className="skills-cards-wrapper" style={{backgroundColor:"var(--card-outer-background)"}}>
    //     <Card color={theme==="light"?"#d6edff":"var(--bg)"} classes="skills-card">
    //       <CardHeader
    //         classes="skills-card-header-content"
    //         title="HTML/CSS"
    //         subtitle="(4+ years)"
    //         avatar={
    //           <FontAwesomeIcon
    //             className="skills-item-spacing"
    //             icon={faCode}
    //             size="2x"
    //             aria-hidden={true}
    //           />
    //         }
    //         titleClass="skills-card-header skills-item-spacing"
    //         subTitleClass="skills-item-spacing"
    //         avatarClass="skills-item-spacing"
    //       />
    //       <CardContent classes="skills-card-content">
    //         <p>
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s
    //         </p>
    //         <Tags tags={["HTML5", "CSS Modules", "SASS", "Bulma", "Tailwind" , "Material-UI", "Antd", "Bootstrap"]}></Tags>
    //       </CardContent>
    //     </Card>
    //   </div>

    // <div className="skills-cards-wrapper" style={{backgroundColor:"var(--card-outer-background)"}}>
    //   <Card color={theme==="light"?"#d6edff":"var(--bg)"} classes="skills-card">
    //     <CardHeader
    //       classes="skills-card-header-content"
    //       title="Node.js"
    //       subtitle="(6+ years)"
    //       avatar={
    //         <FontAwesomeIcon
    //           className="skills-item-spacing"
    //           icon={faNodeJs}
    //           size="2x"
    //           aria-hidden={true}
    //         />
    //       }
    //       titleClass="skills-card-header skills-item-spacing"
    //       subTitleClass="skills-item-spacing"
    //       avatarClass="skills-item-spacing"
    //     />
    //     <CardContent classes="skills-card-content">
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s
    //       </p>
    //       <Tags tags={["Express.js", "Hapi.js", "loopback", "Apollographql"]}></Tags>
    //     </CardContent>
    //   </Card>
    // </div>

    // <div className="skills-cards-wrapper" style={{backgroundColor:"var(--card-outer-background)"}}>
    //   <Card color={theme==="light"?"#fec":"var(--bg)"} classes="skills-card">
    //     <CardHeader
    //       classes="skills-card-header-content"
    //       title="Architecture"
    //       subtitle="(3+ years)"
    //       avatar={
    //         <FontAwesomeIcon
    //           className="skills-item-spacing"
    //           icon={faSitemap}
    //           size="2x"
    //           aria-hidden={true}
    //         />
    //       }
    //       titleClass="skills-card-header skills-item-spacing"
    //       subTitleClass="skills-item-spacing"
    //       avatarClass="skills-item-spacing"
    //     />
    //     <CardContent classes="skills-card-content">
    //       <p>
    //         Lorem Ipsum is simply dummy text of the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text
    //         ever since the 1500s
    //       </p>
    //       <Tags tags={["Microservices", "REST Based", "GRAPHQL Based", "Micro-frontends"]}></Tags>
    //     </CardContent>
    //   </Card>
    // </div>

    // </div>
  )
}
