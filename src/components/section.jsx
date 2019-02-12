import React from "react"
import { Grid, Box, Heading } from "grommet"

const IndexSection = ({
  title,
  titleIcon: TitleIcon,
  size,
  children,
  columns,
  gridGap,
  gridJustifyContent,
  ...rest
}) => (
  <Box {...rest}>
    {title && (
      <Box direction="row" justify="center" align="center" gap="small">
        {TitleIcon && <TitleIcon size="large" />}
        <Heading textAlign="center" level="2">
          {title}
        </Heading>
      </Box>
    )}

    <Grid
      fill="horizontal"
      justify="around"
      justifyContent={gridJustifyContent || `stretch`}
      columns={columns}
      gap={gridGap || `small`}
    >
      {children}
    </Grid>
  </Box>
)

export default IndexSection
