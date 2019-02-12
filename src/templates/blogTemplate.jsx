import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Heading, ResponsiveContext, Anchor } from "grommet"
import rehypeReact from "rehype-react"
import styled from "styled-components"

import PhotoComposition from "../components/photoComposition"
import Tip from "../components/tip"
import Section from "../components/section"
import App from "../components/layout"
import Post from "../components/post"
import Posts from "../components/posts"
import TripDetails from "../components/tripNotes"
import Seo from "../components/seo"

const BlogHeading = styled(Heading)`
  font-family: "Indie flower", "Lato", "Arial";
`

const Photo = ({ rehyped }) => {
  const props = JSON.parse(rehyped)
  return (
    <Img
      fluid={props}
      style={{
        maxWidth: props.presentationWidth,
        margin: `0 auto`,
      }}
    />
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "photo-composition": PhotoComposition,
    "rehype-image": Photo,
    tip: Tip,
    a: Anchor,
    h1: data => <BlogHeading level={1} {...data} />,
    h2: data => <BlogHeading level={2} {...data} />,
    h3: data => <BlogHeading level={3} {...data} />,
    h4: data => <BlogHeading level={4} {...data} />,
    h5: data => <BlogHeading level={5} {...data} />,
    h6: data => <BlogHeading level={6} {...data} />,
  },
}).Compiler

const Toc = styled.div`
  word-wrap: break-word;

  ul {
    margin: 0;
    list-style-type: none;
  }

  li {
    padding: 5px;
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
      <ResponsiveContext.Consumer>
        {size => (
          <App title="OAsome blog">
            <Box direction="row-responsive">
              <Box basis={size !== `small` ? `3/4` : `full`}>
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
              </Box>
              {size !== `small` && (
                <Box basis="1/4" margin={{ bottom: `small` }}>
                  <Box margin="none" pad="none">
                    {frontmatter.km && (
                      <TripDetails
                        km={frontmatter.km}
                        itinerary={frontmatter.itinerary}
                        duration={frontmatter.duration}
                      />
                    )}
                  </Box>

                  <Box
                    margin={{ horizontal: `medium` }}
                    elevation="small"
                    pad="small"
                  >
                    <Heading level="5" padding="small">
                      Contents
                    </Heading>
                    <Toc
                      dangerouslySetInnerHTML={{ __html: tableOfContents }}
                    />
                  </Box>
                </Box>
              )}
            </Box>
            {similar.length > 1 && (
              <Section
                columns={size || `medium`}
                background="light-4"
                title="Similar articles"
              >
                <Posts
                  posts={similar
                    .filter(
                      post => post.frontmatter.title !== frontmatter.title
                    )
                    .slice(0, 8)}
                />
              </Section>
            )}
          </App>
        )}
      </ResponsiveContext.Consumer>
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
            fluid(maxHeight: 450, maxWidth: 800, quality: 100) {
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
