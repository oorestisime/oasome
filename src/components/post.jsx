import React, { Component } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Box, Text, Heading } from "grommet"
import { Clock, Map, Schedule } from "grommet-icons"

import Tags from "./tags"
// import Share from "./share"

class Post extends Component {
  gotoPrevLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo - 1 })
  }

  gotoNextLightboxImage() {
    const { photo } = this.state
    this.setState({ photo: photo + 1 })
  }

  renderHeader() {
    const { title, date, cover, timeToRead, country } = this.props

    return (
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
            <Text size="small">{date}</Text>
            <Map color="dark-3" size="medium" />
            <Text size="small">{country}</Text>
            <Clock color="dark-3" size="medium" />
            <Text size="small">{timeToRead} min read</Text>
          </Box>
        </Box>
      </Box>
    )
  }

  render() {
    const { tags, content, size } = this.props

    return (
      <Box round="xsmall" margin="medium" elevation="medium">
        {this.renderHeader()}
        <Box pad="medium" align="center" as="article">
          {content}
        </Box>
        {size !== `small` && (
          <Box
            margin={{ top: `small` }}
            gap="xsmall"
            direction="row-responsive"
            align="center"
          >
            <Tags tags={tags} />
          </Box>
        )}
      </Box>
    )
  }
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
