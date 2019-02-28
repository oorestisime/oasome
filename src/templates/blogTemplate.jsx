import React, { Fragment, useContext } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Box, Heading, ResponsiveContext } from "grommet"
import styled from "styled-components"

import Section from "../components/section"
import App from "../components/layout"
import Post from "../components/post"
import Posts from "../components/posts"
import TripDetails from "../components/tripNotes"
import Seo from "../components/seo"
import { renderAst } from "../tools"

const Toc = styled.div`
  word-wrap: break-word;

  ul {
    margin: 0;
    list-style-type: none;
    padding-left: 1em;
  }

  li {
    padding: 2px;
  }
  a {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;
  }
  a:hover {
    color: black;
  }
`

function BlogPost({ data, pageContext }) {
  const size = useContext(ResponsiveContext)
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { similar } = pageContext
  const { frontmatter, htmlAst, timeToRead, tableOfContents } = markdownRemark
  return (
    <Fragment>
      <Seo
        key={`seo-${frontmatter.title}`}
        postImage={frontmatter.cover.childImageSharp.fluid.src}
        postData={markdownRemark}
      />
      <App title="OAsome blog">
        <Box
          width="xxlarge"
          justify="around"
          direction="row-responsive"
          pad="small"
          alignSelf="center"
        >
          <Post
            size={size}
            title={frontmatter.title}
            date={frontmatter.date}
            cover={frontmatter.cover}
            tags={frontmatter.tags}
            content={renderAst(htmlAst)}
            type={frontmatter.type}
            timeToRead={timeToRead}
            country={frontmatter.country}
          />
          <Box gap="small" width="medium">
            {frontmatter.km && (
              <TripDetails
                km={frontmatter.km}
                itinerary={frontmatter.itinerary}
                duration={frontmatter.duration}
              />
            )}

            <Box
              margin={{ horizontal: `medium`, bottom: `medium` }}
              elevation="small"
              pad={{ horizontal: `small` }}
            >
              <Heading level="4">Contents</Heading>
              <Toc dangerouslySetInnerHTML={{ __html: tableOfContents }} />
            </Box>
          </Box>
        </Box>
        {similar.length > 1 && (
          <Section background="light-1" title="Similar articles">
            <Posts
              posts={similar
                .filter(post => post.frontmatter.title !== frontmatter.title)
                .slice(0, 8)}
            />
          </Section>
        )}
      </App>
    </Fragment>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, type: { in: ["photo", "article"] } }
    ) {
      htmlAst
      timeToRead
      tableOfContents(pathToSlugField: "frontmatter.path")
      excerpt(pruneLength: 150)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        type
        country
        km
        itinerary
        duration
        cover {
          childImageSharp {
            fluid(maxHeight: 550, maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

BlogPost.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape().isRequired,
}

export default BlogPost
