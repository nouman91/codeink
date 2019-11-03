import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { rhythm, scale } from "../utils/typography"
import Navbar from "./navbar"
import "./layout.css"

export const ThemeContext = React.createContext(
  localStorage.getItem("theme") || "light"
)

const Layout = props => {
  const [theme, setTheme] = React.useState(undefined)

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [])

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const marginLeft =
    location.pathname === rootPath || location.pathname === "/about-me"
      ? rhythm(5.5)
      : "auto"
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
    <ThemeContext.Provider value={theme}>
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
              content: theme === "light" ? "#ffa8c5" : "#282c35",
            },
          ]}
        />
        <div style={{ display: "flex" }}>
          <Navbar
            setTheme={theme => {
              localStorage.setItem("theme", theme)
              window.__setTheme()
              setTheme(theme)
            }}
            theme={theme || "light"}
          />
          <main className="main-content">{children}</main>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
