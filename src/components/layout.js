import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { rhythm, scale } from "../utils/typography"
import Toggle from "./toggle"
import Sidebar from "./sidebar"

import './layout.css'

const Layout = props => {
  const [theme, setTheme] = React.useState(undefined)

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [])

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`;
  const marginLeft = location.pathname === rootPath || location.pathname === "/about-me" ? rhythm(5.5) : "auto" ;
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: "var(--textTitle)",
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <div
      style={{
        color: "var(--textNormal)",
        background: "var(--bg)",
        transition: "color 0.2s ease-out, background 0.2s ease-out",
        minHeight: "100vh",
      }}
    >
      <Helmet
        meta={[
          {
            name: "theme-color",
            content:
            theme === "light"
                ? "#ffa8c5"
                : "#282c35",
          },
        ]}
      />
      <div
        className="wrapper"
      >
        <header className="header-main-small">
            {header}
            <Toggle
              setTheme={theme => {
                localStorage.setItem("theme", theme)
                window.__setTheme()
                setTheme(theme)
              }}
              theme={theme || "light"}
            ></Toggle>
          </header>

        {location.pathname === rootPath || location.pathname === "/about-me" ? (
          <Sidebar />
        ) : (
          <div></div>
        )}

        <div
          style={{
            marginLeft,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
          }}
          className="main"
        >
          <header className="header-main">
            {header}
            <Toggle
              setTheme={theme => {
                localStorage.setItem("theme", theme)
                window.__setTheme()
                setTheme(theme)
              }}
              theme={theme || "light"}
            ></Toggle>
          </header>
          <main>{children}</main>
          <footer>
          </footer>
        </div>
      </div>
    </div>
  )
}



export default Layout
