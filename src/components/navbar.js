import React from "react"
import { Link } from "gatsby"

import "./navbar.css"
import Toggle from "./toggle"

export default function(props) {
  return (
    <nav className="navbar" role="navigation" ariaLabel="main navigation">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <Link to={"/"}><h2>N.</h2></Link>
        </div>
        <div className="navbar-menu">
          <Link activeClassName="navbar-link-active" className="navbar-item" to={"/about-me"}>
            About me
          </Link>
          <Link activeClassName="navbar-link-active" className="navbar-item" to={"/"}>
            Blogs
          </Link>
          <Link activeClassName="navbar-link-active" className="navbar-item" to={"/contact"}>
            Contact
          </Link>
          <div className="navbar-settings">
            <div className="navbar-item separater"></div>
            <div className="navbar-item">
              <Toggle className="navbar-item" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
