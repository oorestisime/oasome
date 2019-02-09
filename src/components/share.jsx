import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import {
  TwitterShareButton,
  EmailShareButton,
  FacebookShareButton,
} from "react-share"

import config from "../config"

const styles = () => ({
  iconHover: {
    "&:hover": {
      color: grey[800],
    },
  },
})

const getLink = (site, path) => `${site.siteMetadata.siteUrl}${path}`

const Share = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={data => {
      const { classes, path, title } = props
      return (
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://instagram.com/${config.instagram}/`}
            style={{ textDecoration: "none" }}
          >
            <MenuItem>
              <Instagram className={classes.iconHover} color="disabled" />
            </MenuItem>
          </a>
          <MenuItem>
            <TwitterShareButton url={getLink(data.site, path)} title={title}>
              <Twitter className={classes.iconHover} color="disabled" />
            </TwitterShareButton>
          </MenuItem>
          <MenuItem>
            <FacebookShareButton url={getLink(data.site, path)} title={title}>
              <Facebook className={classes.iconHover} color="disabled" />
            </FacebookShareButton>
          </MenuItem>
          <MenuItem>
            <EmailShareButton url={getLink(data.site, path)} subject={title}>
              <Email className={classes.iconHover} color="disabled" />
            </EmailShareButton>
          </MenuItem>
        </div>
      )
    }}
  />
)

Share.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Share
