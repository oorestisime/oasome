import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Text, Button } from "grommet"

import ListItem from "./listItem"
import { InternalLink } from "../tools"

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const Destinations = classes => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          distinct(field: frontmatter___country)
          edges {
            node {
              id
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                country
              }
            }
          }
        }
      }
    `}
    render={data =>
      data.allMarkdownRemark.distinct.map(dest => (
        <InternalLink key={dest} to={`/destination/${dest}`}>
          <ListItem>
            <Text>{capitalize(dest)}</Text>
          </ListItem>
        </InternalLink>
      ))
    }
  />
)

export default Destinations
