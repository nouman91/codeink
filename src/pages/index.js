import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sections from "../components/sections";

import Tags from "../components/tags"
import { rhythm } from "../utils/typography"
import { formatReadingTime } from "../utils/helpers"
import Skills from "../components/skills"
import { Avatar } from "../components/bio"

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
// class BlogIndex extends React.Component {
//   render() {
//     const { data } = this.props
//     const siteTitle = data.site.siteMetadata.title
//     const posts = data.allMarkdownRemark.edges
//     console.log(data)
//     return (
//       <Layout location={this.props.location} title={siteTitle}>
//         <SEO title="Nouman Waheed Full-Stack Developer" />
//         <div className="container">
//           <section style={{ height: "80vh" }}>
//             {/* <div style={{display:"flex", alignItems:"space-between"}}>
//             <header>
//               <h2>Hi, there, I am Nouman Waheed, I am award winning software engineer from Islamabad</h2>
//             </header>
//             <Image
//             fixed={data.img.childImageSharp.fixed}
//             alt=""
//           />
//           </div> */}
//             <header style={{ maxWidth: "30rem" }}>
//               <h2>
//                 Hey there, my name is Nouman Waheed I am award winning software
//                 engineer from Islamabad.
//               </h2>
//               <p>
//                 I love connecting brands and companies with their customers
//                 through good design, I can help you with logo, identity &
//                 digital design. I teach design on skillshare and I post very
//                 often on dribbble, but enough about me, how can I help you?
//               </p>
//               <a href="mailto:noumanwaheed91@gmail.com">
//                 noumanwaheed91@gmail.com
//               </a>
//             </header>
//             <div style={{ backgroundColor: "#fff5f5" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   textAlign: "center",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               ></div>
//               <p>
//                 "Nouman is simply put, a rock star! He is a consummate software
//                 professional with a personable disposition."
//               </p>
//               <h4 style={{ margin: 0 }}>Sohail Bhamani</h4>
//               <span style={{ color: "var(--testimonial-light-color)" }}>
//                 Senior IT Professional
//               </span>
//             </div>
//           </section>
//         </div>
//         {/* <section style={{height:"100vh"}}>
//           <header>
//             <h2>Technicall Skills Set</h2>
//           </header>
//           <p style={{ maxWidth: "30rem" }}>
//             I am a big believer in learning, I am always learning new things and
//             improving my fundamentals. I also believe in change is good and I am
//             always in pursuit of learning new and challenging things.{" "}
//           </p>
//           <Skills />
//         </section>
//         <section style={{height:"100vh"}}>
//           <header>
//             <h2>Blog</h2>
//           </header>
//           <p>I also write blogs to share my expereince.</p>
//           <Skills />
//         </section> */}
//       </Layout>
//     )
//   }
// }

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
