import React from "react"
import Toggle from "react-toggle"
import "./toggle.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"

import sun from "../assets/sun.png"
import moon from "../assets/moon.png"

export default function(props) {
  return (
    <div
      onClick={() => {
        if (props.theme === "light") {
          props.setTheme("dark")
        }
        if (props.theme === "dark") {
          props.setTheme("light")
        }
      }}
      className="theme-swticher"
    >
      <FontAwesomeIcon icon={props.theme==="light"?faMoon:faSun} size="lg" />
    </div>
    // <div id={"toggle-" + props.theme}>
    //   {" "}
    //   <Toggle
    //     defaultChecked={props.theme}
    //     icons={{
    //       checked: (
    //         <img
    //           src={moon}
    //           width="16"
    //           height="16"
    //           role="presentation"
    //           style={{ pointerEvents: "none" }}
    //         />
    //       ),
    //       unchecked: (
    //         <img
    //           src={sun}
    //           width="16"
    //           height="16"
    //           role="presentation"
    //           style={{ pointerEvents: "none" }}
    //         />
    //       ),
    //     }}
    //     onChange={() => {
    // if (props.theme === "light") {
    //   props.setTheme("dark")
    // }
    // if (props.theme === "dark") {
    //   props.setTheme("light")
    // }
    //     }}
    //   />
    // </div>
  )
}
