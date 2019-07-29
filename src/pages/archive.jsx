import React, { Fragment } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import App from "../components/layout"
import Posts from "../components/posts"
import Section from "../components/section"
import { flatten } from "../tools"
import Seo from "../components/seo"

function Archive({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `Archive - OAsome blog`,
            path: `/archive/`,
          },
        }}
      />
      <App title="Archive">
        <Section>
          <Posts posts={flatten(posts)} limit={false} />
        </Section>
      </App>
    </Fragment>
  )
}

Archive.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const pageQuery = graphql`
  query ArchiveQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { in: ["photo", "article", "friends"] } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            country
            cover {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 320, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Archive
