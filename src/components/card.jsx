import React, { useContext } from "react"
import {
  ResponsiveContext,
  Box,
  Heading,
  Paragraph,
  Text,
  Anchor,
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
}) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box width="medium" align="start" pad="small">
      <Box elevation="small" round="xsmall">
        <InternalLink to={path}>
          <Img fluid={cover.childImageSharp.fluid} />
        </InternalLink>
        <Box margin={{ top: `xsmall` }} pad={{ horizontal: `small` }}>
          <Heading level="3" margin={{ vertical: `small` }}>
            {title}
          </Heading>
          <Box
            direction="row"
            gap="xsmall"
            align="center"
            margin={{ left: `xsmall`, top: `xsmall` }}
          >
            <Map color="dark-2" size="medium" />
            <Text size="small">{country}</Text>
            <Clock color="dark-2" size="medium" />
            <Text size="small">{timeToRead} min read</Text>
          </Box>
          {type !== `photo` && (
            <Paragraph margin={{ horizontal: `small` }}>
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
              <Tags size="small" tags={tags} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Card
