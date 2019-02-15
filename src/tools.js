import React from "react"
import _ from "lodash"
import styled from "styled-components"
import { Link } from "gatsby"
import rehypeReact from "rehype-react"
import Img from "gatsby-image"
import { Anchor, Heading } from "grommet"

import PhotoComposition from "./components/photoComposition"
import Tip from "./components/tip"

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1)
const coordinates = posts =>
  _.uniqBy(
    _.flatten(
      posts
        .filter(
          post =>
            post.frontmatter.coordinates && post.frontmatter.type !== `friends`
        )
        .map(post => post.frontmatter.coordinates.map(coord => coord))
    ),
    v => `${v.coordinates[0]} ${v.coordinates[1]}`
  )
const groupBy = (posts, field) =>
  _.groupBy(posts, post => post.frontmatter[field])
const flatten = posts => posts.map(post => post.node)
const calculateTotals = posts =>
  posts.reduce((accumulator, post) => {
    const stops =
      post.frontmatter.itinerary !== null
        ? post.frontmatter.itinerary.length
        : 0
    return Object.assign({
      km: (accumulator.km || 0) + post.frontmatter.km || 0,
      duration: (accumulator.duration || 0) + post.frontmatter.duration || 0,
      stops: (accumulator.stops || 0) + stops,
    })
  }, 0)

const InternalLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`

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

export {
  capitalize,
  coordinates,
  calculateTotals,
  groupBy,
  flatten,
  InternalLink,
  renderAst,
}
