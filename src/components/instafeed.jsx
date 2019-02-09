import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Anchor } from "grommet"
import { Instagram } from "grommet-icons"

import Section from "./section"

const Instafeed = () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode(limit: 9, sort: { fields: [likes], order: DESC }) {
          edges {
            node {
              id
              likes
              localFile {
                childImageSharp {
                  fixed(width: 150, height: 150, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Section
        margin="none"
        gap="none"
        pad="none"
        title="OAsome"
        titleIcon={Instagram}
        gridGap="none"
        gridJustifyContent="around"
        columns={{ count: `fill` }}
      >
        <Box margin="none" gap="none" direction="row">
          {data.allInstaNode.edges.map(value => (
            <Box margin="none" key={value.node.id} fill>
              <Anchor
                plain
                margin="none"
                rel="noopener noreferrer"
                target="_blank"
                href={`https://www.instagram.com/p/${value.node.id}`}
              >
                <Img
                  fixed={value.node.localFile.childImageSharp.fixed}
                  alt={value.node.id}
                />
              </Anchor>
            </Box>
          ))}
        </Box>
      </Section>
    )}
  />
)

// <GridListTileBar
// className={props.classes.caption}
// style={{ height: "25px" }}
// subtitle={
//   <span>
//     <Heart style={{ fontSize: 12 }} />
//     {` ${img.node.likes}`}
//   </span>
// }
// />
// </GridListTile>

export default Instafeed
