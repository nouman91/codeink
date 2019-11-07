import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import { rhythm } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="page-template">
          <h1>Blog</h1>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div
                className="blog-post"
              >
                <div style={{ boxShadow:"var(--testimonial-box-shadow)" }}>
                <Link style={{ boxShadow:"var(--testimonial-box-shadow)" }} to={node.fields.slug}>
                  <article key={node.fields.slug} style={{ padding: "20px" }}>
                    <header>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                          marginTop: 0,
                        }}
                      >
                        {title}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.3rem",
                          paddingLeft: 0,
                        }}
                      >
                        {" "}
                        <small>
                          {node.frontmatter.date}
                          {` • ${formatReadingTime(node.timeToRead)}`}
                        </small>
                        <Tags tags={node.frontmatter.tags || []}></Tags>
                      </div>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                        style={{ marginBottom: 0 }}
                      />
                    </section>
                  </article>
                </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
