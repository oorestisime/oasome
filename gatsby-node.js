/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const _ = require('lodash');
const axios = require('axios');
const cheerio = require('cheerio');
const crypto = require('crypto');

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

  const pageSize = 3;
  Object.keys(destPosts).forEach((dest) => {
    const pagesSum = Math.ceil(destPosts[dest].length / pageSize);

    for (let page = 1; page <= pagesSum; page += 1) {
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
    const pagesSum = Math.ceil(tagPosts[tagName].length / pageSize);

    for (let page = 1; page <= pagesSum; page += 1) {
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
                  fluid(maxHeight: 500) {
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
      if (['article', 'photo'].includes(node.frontmatter.type)) {
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
      }
    });
    return Promise.resolve();
  });
};


function getInstaPosts() {
  return new Promise((resolve) => {
    axios.get('https://www.instagram.com/__arte__mis__/')
      .then((response) => {
      // handle success
        const $ = cheerio.load(response.data);
        const jsonData = $('html > body > script').get(0).children[0].data.replace('window._sharedData =', '').replace(';', '');
        const json = JSON.parse(jsonData).entry_data.ProfilePage[0].graphql;
        const photos = [];
        json.user.edge_owner_to_timeline_media.edges.forEach((edge) => {
          if (edge.node) {
            photos.push(edge.node);
          }
        });
        resolve(photos);
      });
  });
}

function processDatum(datum) {
  const node = {
    // Required fields
    id: datum.shortcode,
    parent: '__SOURCE__',
    internal: { type: 'InstaPost' },
    children: [],

    // Other fields that you want to query with graphQl
    likes: datum.edge_liked_by,
    picture: datum.thumbnail_resources[0].src,
  };

  // Get content digest of node. (Required field)
  const contentDigest = crypto
    .createHash('md5')
    .update(JSON.stringify(node))
    .digest('hex');
  // add it to userNode
  node.internal.contentDigest = contentDigest;
  return node;
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  const data = await getInstaPosts();
  // Process data into nodes.
  data.slice(0, 8).forEach(datum => createNode(processDatum(datum)));
};
