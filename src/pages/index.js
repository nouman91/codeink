import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sections from "../components/sections"

function PageIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Nouman Waheed Full-Stack Developer" />
      <div>
        <Sections />
      </div>
    </Layout>
  )
}

export default PageIndex

export const pageQuery = graphql`
  query my {
    site {
      siteMetadata {
        title
      }
    }
    img: file(absolutePath: { regex: "/IMG_8942.JPG/" }) {
      childImageSharp {
        fixed(width: 600, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
