// import React from "react"
// import Helmet from "react-helmet"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import SocialList from "../components/social-links"

// export default function(props) {
//   const { title, description } = props.data.site.siteMetadata

//   return (
//     <Layout location={props.location} title={title}>
//       <div>
//         <Helmet>
//           <title>{`${title} - ${title}`}</title>
//           <meta name="description" content={description} />
//         </Helmet>
//       </div>
//       <h1>Make Contact</h1>
//       <p>Thank you for visiting my website I am excited to hear from you. </p>
//       <p>Connect with me on.</p>
//       <SocialList social={props.data.site.siteMetadata.social} />
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query myself {
//     site {
//       siteMetadata {
//         author
//         title
//         description
//         social {
//           twitter
//           github
//           instagram
//           linkedin
//           email
//         }
//       }
//     }
//   }
// `
