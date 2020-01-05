import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Helmet from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {TagsList} from "../components/tagsList"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          style={[{
              "cssText": `
                  body {
                      --postBackground:${post.frontmatter.bgcolor || `#ffffff`};
                      --postText:${post.frontmatter.textcolor || `#808080`};
                      --logoColor:${post.frontmatter.logocolor || `green`};
                  }
              `
          }]}
        />
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article
          className={`post-content ${post.frontmatter.thumbnail || `no-image`}`}
        >
          <header className="post-content-header">
            <h1 className="post-content-title">{post.frontmatter.title}</h1>
          </header>

          {post.frontmatter.description && (
            <p className="post-content-excerpt">{post.frontmatter.description}</p>
          )}

          {post.frontmatter.thumbnail && (
            <div className="post-content-image">
              <Img
                className="kg-image"
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </div>
          )}

          <div
            className="post-content-body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <footer className="post-content-footer">
            <div className="row">
              {post.frontmatter.tags && (
              <div className="col-4">
                <h3>Deliverables</h3>
                <TagsList tags={post.frontmatter.tags} />
              </div>
              )}

              {post.frontmatter.collaboration && (
              <div className="col-8">
                <h3>Collaborators</h3>
                <p>{post.frontmatter.collaboration}</p>
              </div>
              )}
            </div>           
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        tags
        collaboration
        bgcolor
        textcolor
        logocolor
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
