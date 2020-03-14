import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Grid } from "grommet"

const PhotoComposition = ({ children }) => (
  <Grid
    gap="xxsmall"
    columns={children.length === 2 ? [`1/2`, `1/2`] : [`1/3`, `1/3`, `1/3`]}
  >
    {children
      .filter(child => child !== `\n`)
      .map((child, i) => (
        <Img key={i} fluid={JSON.parse(child.props.rehyped)} />
      ))}
  </Grid>
)

PhotoComposition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PhotoComposition
