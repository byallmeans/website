import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default props => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-jumbo`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content" data-ext={ props.node.frontmatter.thumbnail.extension }>
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
      </div>
    </Link>
    <div className="post-card-bg">
      {props.node.frontmatter.thumbnail.extension === 'mp4'
        ? <video autoPlay playsInline muted loop src={props.node.frontmatter.thumbnail.publicURL} />
        : <Img className="kg-image" fluid={props.node.frontmatter.thumbnail.childImageSharp.fluid} alt={props.node.frontmatter.title} />
      }
    </div>
  </article>
)
