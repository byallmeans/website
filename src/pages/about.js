import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`ian gordon`, `ryan gordon`, `gamutsf`, `portland design`, `portland web development`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2>
            We create authentic brand experiences through collaboration, strategy, and a really, ridiculously close attention to detail.
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.aboutImage.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <p>{siteTitle} is Ian Gordon &mdash; former Principal at <a href="https://gamutsf.com" target="_blank" rel="noopener noreferrer">Gamut</a> in San Francisco, CA &mdash; and Ryan Gordon &mdash; full stack developer and all around nice guy. B.A.M is a full service creative studio that works closely with clients to create and elevate brands however, and wherever, they're experienced.</p>
          <div className="row">
            <div className="col-4">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "left",
                }}
              >
                <h4>Branding</h4>
                <ul>
                  <li>Concept development</li>
                  <li>Naming</li>
                  <li>Strategy &amp; Positioning</li>
                  <li>Identity &amp; Design</li>
                  <li>Print &amp; Packaging</li>
                  <li>Brand Messaging</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "left",
                }}
              >
                <h4>Development</h4>
                <ul>
                  <li>UI/UX</li>
                  <li>Content Strategy</li>
                  <li>Prototyping</li>
                  <li>Presentational Markup/Javascript</li>
                  <li>CMS Setup &amp; Customization</li>
                  <li>Hosting &amp; Deployment</li>
                  <li>Ecommerce</li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div
                style={{
                  padding: "1rem 0",
                  textAlign: "left",
                }}
              >
                <h4>&amp; More...</h4>
                <ul>
                  <li>Motion Graphics</li>
                  <li>Filming &amp; Editing</li>
                  <li>Search Optimization</li>
                  <li>Lounge-chair Psychiatry</li>
                  <li>Other stuff, probably</li>
                </ul>
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
    aboutImage: file(
      relativePath: { eq: "sivioco-ll.jpg" }
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
