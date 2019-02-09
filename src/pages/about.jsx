import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box } from "grommet"

import Section from "../components/section"
import Seo from "../components/seo"
import App from "../components/layout"

function Error({ data }) {
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: `About this blog - OAsome blog`,
            path: `/about/`,
          },
        }}
      />
      <App title="About this blog">
        <Section background="light-1" title="About us" columns="auto">
          <Box
            margin={{ horizontal: `xlarge` }}
            pad="medium"
            align="center"
            elevation="medium"
          >
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </Box>
        </Section>
      </App>
    </Fragment>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        path
      }
    }
  }
`

Error.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default Error
