import React, { useContext } from "react"
import PropTypes from "prop-types"
import { ResponsiveContext } from "grommet"

import Card from "./card"

const SLICES = {
  small: 2,
  medium: 3,
  large: 4,
}

const Posts = ({ posts }) => {
  const size = useContext(ResponsiveContext)
  if (posts.length < 1) {
    return null
  }
  const sliced = SLICES[size]

  return posts
    .slice(0, sliced)
    .map(post => (
      <Card
        key={post.frontmatter.title}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover}
        tags={post.frontmatter.tags}
        country={post.frontmatter.country}
        timeToRead={post.timeToRead}
        content={post.excerpt}
        path={post.frontmatter.path}
        type={post.frontmatter.type}
      />
    ))
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default Posts
