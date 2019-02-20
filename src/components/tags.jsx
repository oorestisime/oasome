import React from "react"
import { navigate } from "gatsby"
import { Box, Button, Text } from "grommet"

const Tags = ({ tags, size }) => (
  <Box
    margin={{ vertical: `small` }}
    direction="row-responsive"
    wrap
    gap="xsmall"
  >
    {tags.map(tag => (
      <Button key={tag} onClick={() => navigate(`/tag/${tag.toLowerCase()}`)}>
        <Box
          margin={{ top: `xsmall` }}
          background="brand"
          round="xsmall"
          pad={{ horizontal: `xsmall` }}
        >
          <Text size={size}>{tag}</Text>
        </Box>
      </Button>
    ))}
  </Box>
)
export default Tags
