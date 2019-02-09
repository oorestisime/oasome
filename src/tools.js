import _ from "lodash"
import styled from "styled-components"
import { Link } from "gatsby"

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
  :visited {
    color: inherit;
  }
`

export {
  capitalize,
  coordinates,
  calculateTotals,
  groupBy,
  flatten,
  InternalLink,
}
