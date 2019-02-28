import React from "react"
import { Box, Anchor, Text } from "grommet"
import {
  Twitter,
  MailOption,
  Instagram,
  Github,
  Facebook,
  Rss,
} from "grommet-icons"

import config from "../config"

const Footer = () => (
  <Box background="dark-2" fill="horizontal" pad={{ horizontal: `small` }}>
    <Box
      alignSelf="center"
      width="xxlarge"
      margin={{ horizontal: `medium`, vertical: `small` }}
      gap="medium"
    >
      <Box direction="row" gap="xsmall">
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Instagram"
          icon={<Instagram color="accent-3" />}
          href={`https://instagram.com/${config.instagram}/`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Twitter"
          icon={<Twitter color="accent-3" />}
          href={`https://twitter.com/${config.twitter}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Facebook"
          icon={<Facebook color="accent-3" />}
          href={`https://facebook.com/${config.facebook}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Email"
          icon={<MailOption color="accent-3" />}
          href={`mailto:${config.email}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="Github"
          icon={<Github color="accent-3" />}
          href={`https://github.com/${config.github}`}
        />
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          a11title="RSS"
          icon={<Rss color="accent-3" />}
          href="/rss.xml"
        />
      </Box>
      <Text>
        {`Both the texts and the photos are released under the `}
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="Creative Commons License"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        />
        {`. `}
        <br />
        {`Code of this blog is released under the `}
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="GNU Affero General Public License 3.0"
          href="https://www.gnu.org/licenses/agpl-3.0.en.html"
        />
        {`, and is available on `}
        <Anchor
          rel="noopener noreferrer"
          target="_blank"
          color="accent-3"
          label="Github"
          href="https://github.com/${config.github}"
        />
      </Text>
    </Box>
  </Box>
)

export default Footer
