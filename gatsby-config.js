module.exports = {
  pathPrefix: '/oasome',
  siteMetadata: {
    title: 'OAsome Blog',
    siteUrl: 'https://oasome.blog',
    description: 'OAsome is a travel blog of O and A. We detail our experiences and adventures around the world.',
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
          'gatsby-remark-copy-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
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
