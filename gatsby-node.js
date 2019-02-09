/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const _ = require(`lodash`)

function createLinkedPages(createPage, edges) {
  const listTemplate = path.resolve(`src/templates/list.jsx`)
  const tagPosts = {}
  const destPosts = {}
  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!tagPosts[tag]) {
          tagPosts[tag] = []
        }
        tagPosts[tag].push(node)
      })
    }
    if (node.frontmatter.country) {
      if (!destPosts[node.frontmatter.country]) {
        destPosts[node.frontmatter.country] = []
      }
      destPosts[node.frontmatter.country].push(node)
    }
  })
  Object.keys(destPosts).forEach(dest => {
    createPage({
      path: `/destination/${dest}`,
      component: listTemplate,
      context: {
        posts: destPosts[dest],
        title: dest,
        type: `destination`,
      },
    })
  })

  Object.keys(tagPosts).forEach(tagName => {
    createPage({
      path: `/tag/${tagName.toLowerCase()}`,
      component: listTemplate,
      context: {
        posts: tagPosts[tagName],
        title: tagName,
        type: `tag`,
      },
    })
  })
  return { tagPosts, destPosts }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.jsx`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            timeToRead
            frontmatter {
              date
              path
              tags
              title
              country
              type
              featured
              itinerary
              km
              duration
              coordinates {
                coordinates
                country
              }
              cover {
                childImageSharp {
                  fluid(maxHeight: 280, maxWidth: 320, quality: 100) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const { destPosts, tagPosts } = createLinkedPages(
      createPage,
      result.data.allMarkdownRemark.edges
    )

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if ([`article`, `photo`].includes(node.frontmatter.type)) {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          context: {
            similar: _.uniqBy(
              _.flatten(
                _.concat(
                  destPosts[node.frontmatter.country],
                  node.frontmatter.tags.map(tag => tagPosts[tag])
                )
              ),
              `id`
            ),
          }, // additional data can be passed via context
        })
      }
    })
    return Promise.resolve()
  })
}
