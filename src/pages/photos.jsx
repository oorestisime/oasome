import React, { Fragment } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Box } from "grommet"

import App from "../components/layout"
import Section from "../components/section"
import Posts from "../components/posts"
import { flatten } from "../tools"
import Seo from "../components/seo"

function PhotosArchive({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `Photography articles - OAsome blog`,
            path: `/photos/`,
          },
        }}
      />
      <App title="Photography articles">
        <Section justifyInner="start">
          <Posts posts={flatten(posts)} />
        </Section>
      </App>
    </Fragment>
  )
}

PhotosArchive.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const pageQuery = graphql`
  query PhotoQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "photo" } } }
    ) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            type
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

export default PhotosArchive
