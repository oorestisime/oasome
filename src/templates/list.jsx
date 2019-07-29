import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"
import { Box, ResponsiveContext } from "grommet"

import App from "../components/layout"
import Map from "../components/map"
import Section from "../components/section"
import Posts from "../components/posts"
import { coordinates, capitalize } from "../tools"

function List({ pageContext }) {
  const { posts, title, type } = pageContext
  const coords = coordinates(posts)
  return (
    <App title={`OAsome - ${capitalize(title)}`}>
      {type !== `tag` && (
        <Box alignSelf="center" margin={{ vertical: `small` }}>
          <Map cities={coords} zoom={3} center={_.sample(coords).coordinates} />
        </Box>
      )}
      <ResponsiveContext.Consumer>
        {size => (
          <Section columns={size || `medium`}>
            <Posts posts={posts} />
          </Section>
        )}
      </ResponsiveContext.Consumer>
    </App>
  )
}

List.propTypes = {
  pageContext: PropTypes.shape().isRequired,
}

export default List
