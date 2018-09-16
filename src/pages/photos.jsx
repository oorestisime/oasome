import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import withRoot from '../withRoot';
import App from '../components/layout';
import Section from '../components/section';
import Posts from '../components/posts';
import { flatten } from '../components/tools';


function PhotosArchive({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <App title="Photography articles">
      <Section>
        <Posts posts={flatten(posts)} />
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
                fluid(maxHeight: 250, maxWidth: 350, quality: 100) {
                  ...GatsbyImageSharpFluid
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
