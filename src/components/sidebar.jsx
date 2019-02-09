import React from "react"
import { Link, navigate } from "gatsby"

import {
  Layer,
  Box,
  ResponsiveContext,
  Text,
  Accordion,
  AccordionPanel,
  Button,
  Collapsible,
} from "grommet"
import { Archive, Camera, Group, Home, FormClose, Globe } from "grommet-icons"

import Destinations from "./destinations"
import ListItem from "./listItem"

class Sidebar extends React.Component {
  static contextType = ResponsiveContext
  state = {
    destOpen: false,
  }

  render() {
    const { toggleSidebar } = this.props
    const { destOpen } = this.state
    const size = this.context
    const SidebarComponent = size === `small` ? Layer : Box
    const sidebarProps =
      size === `small`
        ? { full: true, onEsc: () => toggleSidebar(false) }
        : {
            fill: `vertical`,
            width: `medium`,
            pad: `small`,
            background: `light-1`,
            elevation: `xsmall`,
          }
    return (
      <SidebarComponent {...sidebarProps}>
        {size === `small` && (
          <ListItem hoverIndicator>
            <Button onClick={() => toggleSidebar(false)}>
              <FormClose />
            </Button>
          </ListItem>
        )}

        <Button
          plain
          hoverIndicator
          onClick={() => navigate(`/`)}
          icon={<Home />}
          label={
            <ListItem fill>
              <Text>Home</Text>
            </ListItem>
          }
        />

        <Button
          plain
          hoverIndicator
          onClick={() => navigate(`/archive/`)}
          icon={<Archive />}
          label={
            <ListItem fill>
              <Text>Archive</Text>
            </ListItem>
          }
        />
        <Button
          plain
          hoverIndicator
          onClick={() => navigate(`/photos/`)}
          icon={<Camera />}
          label={
            <ListItem fill>
              <Text>Photos</Text>
            </ListItem>
          }
        />
        <Button
          plain
          hoverIndicator
          onClick={() =>
            this.setState({
              destOpen: !destOpen,
            })
          }
          icon={<Globe />}
          label={
            <ListItem fill>
              <Text>Destinations</Text>
            </ListItem>
          }
        />
        <Collapsible open={destOpen}>
          {}
          <Box margin={{ left: `medium` }}>
            <Destinations />
          </Box>
          {}
        </Collapsible>
        <Button
          plain
          hoverIndicator
          onClick={() => navigate(`/about/`)}
          icon={<Group />}
          label={
            <ListItem fill>
              <Text>About us</Text>
            </ListItem>
          }
        />
      </SidebarComponent>
    )
  }
}

export default Sidebar
