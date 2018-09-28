module.exports = {
  pathPrefix: '/oasome',
  siteMetadata: {
    title: 'OAsome Blog',
    siteUrl: 'https://oasome.blog',
    description: 'Paris-based Cypriot adventurers. A and O. Lovers of life and travel. Want to get a glimpse of the OAsome world?',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/md`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              sizeByPixelDensity: true,
              quality: 90,
            },
          },
          'gatsby-remark-copy-images',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 100,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: 'oasome.blog',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-126639314-1',
        anonymize: true,
        respectDNT: true,
        cookieDomain: 'oasome.blog',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: (
              { query: { site, allMarkdownRemark } },
            ) => allMarkdownRemark.edges.map(edge => Object.assign(
              {},
              edge.node.frontmatter,
              {
                description: edge.node.excerpt,
                url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              },
            )),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        path
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
  ],
};
