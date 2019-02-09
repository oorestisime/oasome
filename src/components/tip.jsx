import React from "react"
import PropTypes from "prop-types"
import { Box, Text, Heading } from "grommet"
import { Alert } from "grommet-icons"

function Tip({ title, children }) {
  return (
    <Box
      margin="none"
      pad={{ horizontal: `large`, vertical: `small` }}
      background="light-3"
    >
      <Box align="center" gap="small" direction="row">
        <Box
          align="center"
          round="full"
          pad="xsmall"
          background="status-warning"
        >
          <Alert size="medium" />
        </Box>
        <Heading level="4">{title}</Heading>
      </Box>
      <Text>{children}</Text>
    </Box>
  )
}

Tip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Tip
