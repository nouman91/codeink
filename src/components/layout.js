import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import { rhythm, scale } from "../utils/typography"
import Toggle from "./toggle"
import Sidebar from "./sidebar"

const Layout = props => {
  const [theme, setTheme] = React.useState(undefined)

  React.useEffect(() => {
    setTheme(localStorage.getItem("theme"))
  }, [])

  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
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
        style={{
          display: "flex",
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <div
          style={{
            maxWidth: rhythm(4),
            height: "90vh",
            background:
              "linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1)",
            // background:
            //   "-webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(187,187,187,1) 11%,rgba(187,187,187,1) 89%,rgba(255,255,255,0) 100%)",
          }}
        ></div>
        {location.pathname === rootPath || location.pathname === "/about-me" ? (
          <Sidebar />
        ) : (
          <div></div>
        )}

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2.625rem",
            }}
          >
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
