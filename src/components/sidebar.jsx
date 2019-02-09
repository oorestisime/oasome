import React from "react"
import { navigate } from "gatsby"

import {
  Layer,
  Box,
  ResponsiveContext,
  Text,
  Button,
  Collapsible,
} from "grommet"
import { Archive, Camera, Group, Home, FormClose, Globe } from "grommet-icons"

import Destinations from "./destinations"
import ListItem from "./listItem"
import { InternalLink } from "../tools"

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
        <InternalLink to="/">
          <ListItem>
            <Home />
            <Text>Home</Text>
          </ListItem>
        </InternalLink>
        <InternalLink to="/archive/">
          <ListItem>
            <Archive />
            <Text>Archive</Text>
          </ListItem>
        </InternalLink>
        <InternalLink to="/photos/">
          <ListItem>
            <Camera />
            <Text>Photos</Text>
          </ListItem>
        </InternalLink>
        <Button
          plain
          onClick={() =>
            this.setState({
              destOpen: !destOpen,
            })
          }
        >
          <ListItem>
            <Globe />
            <Text>Destinations</Text>
          </ListItem>
        </Button>

        <Collapsible open={destOpen}>
          {}
          <Box margin={{ left: `medium` }}>
            <Destinations />
          </Box>
          {}
        </Collapsible>
        <InternalLink to="/about/">
          <ListItem>
            <Group />
            <Text>About us</Text>
          </ListItem>
        </InternalLink>
      </SidebarComponent>
    )
  }
}

export default Sidebar
