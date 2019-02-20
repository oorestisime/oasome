import React from "react"
import { Box, Heading } from "grommet"

const IndexSection = ({
  title,
  titleIcon: TitleIcon,
  size,
  children,
  columns,
  gapInner,
  justifyInner,
  background,
  ...rest
}) => (
  <Box background={background}>
    <Box width="xxlarge" alignSelf="center" {...rest}>
      {title && (
        <Box direction="row" justify="center" align="center" gap="small">
          {TitleIcon && <TitleIcon size="large" />}
          <Heading textAlign="center" level="2">
            {title}
          </Heading>
        </Box>
      )}

      <Box
        wrap
        justify={justifyInner || `center`}
        direction="row-responsive"
        gap={gapInner || `small`}
      >
        {children}
      </Box>
    </Box>
  </Box>
)

export default IndexSection
