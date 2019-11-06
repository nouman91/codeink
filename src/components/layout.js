import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { rhythm, scale } from "../utils/typography"
import Navbar from "./navbar"
import "./layout.css"
import { Footer } from "./footer"

export const ThemeContext = React.createContext(
  typeof window !== 'undefined' && window.localStorage && localStorage.getItem("theme")||"light"
)

const Layout = props => {
  const [theme, setTheme] = React.useState(undefined)

  React.useEffect(() => {
    setTheme(typeof window !== 'undefined' && window.localStorage && localStorage.getItem("theme")||"light")
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
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <div style={{flex: "1 0 auto"}}>
            <Navbar
              setTheme={theme => {
                localStorage.setItem("theme", theme)
                window.__setTheme()
                setTheme(theme)
              }}
              theme={theme || "light"}
            />
            <main className="main-wrapper">{children}</main>
          </div>
          <footer
            style={{
              backgroundColor: "var(--footer-color)",
              width: "100%",
              flexShrink: 0,
              color:"var(--footer-text)",
              borderTop:"var(--footer-border)"
            }}
          >
            <div className="container">
              <div style={{paddingTop:"60px", paddingBottom:"60px"}}> <Footer /> </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
