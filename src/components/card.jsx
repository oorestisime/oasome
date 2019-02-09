import React from "react"
import { navigate } from "gatsby"
import {
  ResponsiveContext,
  Box,
  Heading,
  Paragraph,
  Text,
  Anchor,
  Button,
} from "grommet"
import { Clock, Map } from "grommet-icons"
import Img from "gatsby-image"

import Tags from "./tags"

const Card = ({
  title,
  cover,
  tags,
  country,
  timeToRead,
  content,
  path,
  type,
}) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box align="start" fill pad="small">
        <Box elevation="small" round="xsmall">
          <Box>
            <Button plain onClick={() => navigate(path)}>
              <Img fluid={cover.childImageSharp.fluid} />
            </Button>
          </Box>
          <Box margin={{ top: `xsmall` }} pad={{ horizontal: `small` }}>
            <Button plain onClick={() => navigate(path)}>
              <Heading level="3" margin="none">
                {title}
              </Heading>
            </Button>
            <Box
              direction="row"
              gap="xsmall"
              align="center"
              margin={{ left: `xsmall`, top: `xsmall` }}
            >
              <Map size="medium" />
              <Text size="small">{country}</Text>
              <Clock size="medium" />
              <Text size="small">{timeToRead} min read</Text>
            </Box>
            {type !== `photo` && (
              <Paragraph margin={{ horizontal: `medium` }}>
                {content}
                <Anchor
                  onClick={() => navigate(path)}
                  label=" Read more"
                  size="small"
                  color="neutral-3"
                />
              </Paragraph>
            )}
            {size !== `small` && (
              <Box gap="xsmall" direction="row-responsive" align="center">
                <Tags tags={tags} />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    )}
  </ResponsiveContext.Consumer>
)

export default Card
