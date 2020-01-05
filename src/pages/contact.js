import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Contact" keywords={[`ian gordon`, `ryan gordon`, `portland`, `pdx`, `pdx design`, `pdx development`, `gamutsf`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            Think we'd be a good fit? If you are interested in a new project or collaboration, we’d love to hear from you.
          </h2>
          <div className="row">
            <div className="col-8">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "left",
                }}
              >
                <p>{siteTitle} is located in the vibrant SE of Portland, Oregon in the Pacific Northwest of the United States of America on the planet Earth.</p>
                <p>Our current project start date is February 2020. Our minimum project commitment is 4 weeks.</p>
              </div>
            </div>
            <div className="col-4">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "left",
                }}
              >
                <h4>General Inquiries</h4>
                <address>5644 SE Stark Street, Portland, OR 97215</address>
                T: <a href="tel:503.575.9650">(503) 575-9650</a><br/>
                <a href="mailto:hello@byallmeans.studio">hello@byallmeans.studio</a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
