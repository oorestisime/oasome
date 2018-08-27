/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
let _ = require('lodash');

function paginate(array, pageSize, pageNumber) {
  return array.slice(0).slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function createLinkedPages(createPage, edges) {
  const listTemplate = path.resolve('src/templates/list.jsx');
  const tagPosts = {};
  const destPosts = {};
  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        if (!tagPosts[tag]) {
          tagPosts[tag] = [];
        }
        tagPosts[tag].push(node);
      });
    }
    if (node.frontmatter.country) {
      if (!destPosts[node.frontmatter.country]) {
        destPosts[node.frontmatter.country] = [];
      }
      destPosts[node.frontmatter.country].push(node);
    }
  });

  Object.keys(destPosts).forEach((dest) => {
    const pageSize = 5;
    const pagesSum = Math.ceil(destPosts[dest].length / pageSize);

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path:
          page === 1
            ? `/destination/${dest.toLowerCase()}`
            : `/destination/${dest.toLowerCase()}/page/${page}`,
        component: listTemplate,
        context: {
          posts: paginate(destPosts[dest], pageSize, page),
          title: dest,
          type: 'destination',
          pagesSum,
          page,
        },
      });
    }
  });

  Object.keys(tagPosts).forEach((tagName) => {
    const pageSize = 5;
    const pagesSum = Math.ceil(tagPosts[tagName].length / pageSize);

    for (let page = 1; page <= pagesSum; page++) {
      createPage({
        path:
          page === 1
            ? `/tag/${tagName.toLowerCase()}`
            : `/tag/${tagName.toLowerCase()}/page/${page}`,
        component: listTemplate,
        context: {
          posts: paginate(tagPosts[tagName], pageSize, page),
          title: tagName,
          type: 'tag',
          pagesSum,
          page,
        },
      });
    }
  });
  return { tagPosts, destPosts };
}


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blogTemplate.jsx');

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
              coordinates {
                name
                coordinates
                country
              }
              cover {
                childImageSharp {
                  fluid(maxHeight: 300) {
                    base64
                    aspectRatio
                    src
                    sizes
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const { destPosts, tagPosts } = createLinkedPages(
      createPage, result.data.allMarkdownRemark.edges,
    );

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          similar: _.uniqBy(
            _.flatten(
              _.concat(
                destPosts[node.frontmatter.country],
                node.frontmatter.tags.map(tag => tagPosts[tag]),
              ),
            ),
            'id',
          ),
        }, // additional data can be passed via context
      });
    });
  });
};

// This might need to be a temporal fixed until https://github.com/gatsbyjs/gatsby/issues/4038
exports.onCreateNode = (props) => {
  const { node, actions: { createNodeField } } = props;
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      name: 'slug',
      node,
      value: node.frontmatter.path,
    });
  }
};
