import React from "react"
import { navigate, StaticQuery, graphql } from "gatsby"
import { Text, Button } from "grommet"

import ListItem from "./listItem"

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
        <ListItem key={dest} hoverIndicator>
          <Button
            plain
            onClick={() => navigate(`/destination/${dest}`)}
            label={<Text>{capitalize(dest)}</Text>}
          />
        </ListItem>
      ))
    }
  />
)

export default Destinations
