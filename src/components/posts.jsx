import React from "react"
import PropTypes from "prop-types"

import Card from "./card"

const Posts = ({ posts }) =>
  posts.length > 0
    ? posts.map(post => (
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
    : null

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default Posts
