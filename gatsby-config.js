require(`dotenv`).config()
const config = require(`./src/config`)

module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.url,
    description: config.description,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: `#00739D`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/md`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-rehype-images`,
            options: {
              tag: `rehype-image`,
              quality: 80,
              maxWidth: 2112,
              toFormat: `WEBP`,
              srcSetBreakpoints: [1056 / 4, 1056 / 2, 1056],
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: config.instagram,
        access_token: process.env.IG_ACCESS_TOKEN,
        instagram_id: config.instagram_id,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.gaId,
        anonymize: true,
        respectDNT: true,
        cookieDomain: `oasome.blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `OAsome blog`,
        short_name: `OAsome`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#EEEEEE`,
        display: `minimal-ui`,
        legacy: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
