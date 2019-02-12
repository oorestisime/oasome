import React from "react"
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
import { InternalLink } from "../tools"

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
          <InternalLink to={path}>
            <Img fluid={cover.childImageSharp.fluid} />
          </InternalLink>
          <Box margin={{ top: `xsmall` }} pad={{ horizontal: `small` }}>
            <Heading level="3" margin="none">
              {title}
            </Heading>
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
                <InternalLink to={path}>
                  <Anchor
                    as="span"
                    label=" Read more"
                    size="small"
                    color="neutral-3"
                  />
                </InternalLink>
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
