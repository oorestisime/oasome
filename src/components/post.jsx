import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Box, Text, Heading } from "grommet"
import { Clock, Map, Schedule } from "grommet-icons"

import Tags from "./tags"

const Post = ({
  tags,
  content,
  size,
  title,
  date,
  cover,
  timeToRead,
  country,
}) => {
  const header = (
    <Box fill="horizontal" elevation="xsmall">
      <Box>
        <Img fluid={cover.childImageSharp.fluid} />
      </Box>
      <Box pad="small">
        <Heading level="2" margin="none">
          {title}
        </Heading>
        <Box
          direction="row"
          gap="xsmall"
          align="center"
          margin={{ left: `xsmall`, top: `xsmall` }}
        >
          <Schedule color="dark-3" size="medium" />
          <Text size="small" color="dark-3">
            {date}
          </Text>
          <Map color="dark-3" size="medium" />
          <Text size="small" color="dark-3">
            {country}
          </Text>
          <Clock color="dark-3" size="medium" />
          <Text color="dark-3" size="small">
            {timeToRead} min read
          </Text>
        </Box>
      </Box>
    </Box>
  )

  return (
    <Box
      width="xlarge"
      round="xsmall"
      margin={{ vertical: `medium` }}
      elevation="medium"
    >
      {header}
      <Box pad="medium" align="center" as="article">
        {content}
      </Box>
      {size !== `small` && (
        <Box
          margin={{ top: `small`, horizontal: `small` }}
          gap="xsmall"
          direction="row-responsive"
          align="center"
        >
          <Tags size="medium" tags={tags} />
        </Box>
      )}
    </Box>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string,
  content: PropTypes.node.isRequired,
  cover: PropTypes.shape(),
  country: PropTypes.string.isRequired,
  timeToRead: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}

Post.defaultProps = {
  cover: {},
  path: null,
}

export default Post
