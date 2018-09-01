import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import withRoot from '../withRoot';
import App from '../components/layout';
import Section from '../components/section';
import Posts from '../components/posts';

function PhotosArchive({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <App title="Photography articles">
      <Section>
        <Posts posts={posts} />
      </Section>
    </App>
  );
}

PhotosArchive.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const pageQuery = graphql`
  query PhotoQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: {type: {eq: "photo"}  }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            type
            country
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
`;

export default withRoot(PhotosArchive);
