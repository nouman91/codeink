import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sections from "../components/sections";

function PageIndex (props){
  const { data } = props
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Nouman Waheed Full-Stack Developer" />
      <div>
        <Sections />
      </div>
      {/* <section style={{height:"100vh"}}>
        <header>
          <h2>Technicall Skills Set</h2>
        </header>
        <p style={{ maxWidth: "30rem" }}>
          I am a big believer in learning, I am always learning new things and
          improving my fundamentals. I also believe in change is good and I am
          always in pursuit of learning new and challenging things.{" "}
        </p>
        <Skills />
      </section>
      <section style={{height:"100vh"}}>
        <header>
          <h2>Blog</h2>
        </header>
        <p>I also write blogs to share my expereince.</p>
        <Skills />
      </section> */}
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
