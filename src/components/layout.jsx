import React from "react"
import PropTypes from "prop-types"
import { Grommet, Box, ResponsiveContext } from "grommet"

import { customTheme } from "../theme"
import Instafeed from "./instafeed"
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

class App extends React.Component {
  state = {
    showSidebar: false,
  }

  toggleSidebar = showSidebar => this.setState({ showSidebar })

  render() {
    const { title, children } = this.props
    const { showSidebar } = this.state
    const content = <Box justify="center">{children}</Box>
    return (
      <Grommet full theme={customTheme}>
        <Header
          showSidebar={showSidebar}
          toggleSidebar={this.toggleSidebar}
          title={title}
        />
        {showSidebar && (
          <Box direction="row" flex>
            <Sidebar toggleSidebar={this.toggleSidebar} />
            {content}
          </Box>
        )}
        {!showSidebar && content}
        <ResponsiveContext.Consumer>
          {size => size !== `small` && <Instafeed />}
        </ResponsiveContext.Consumer>
        <Footer />
      </Grommet>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

App.defaultProps = {
  children: null,
  title: `OAsome blog`,
}

export default App
