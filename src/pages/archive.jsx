import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import withRoot from '../withRoot';
import App from '../components/layout';
import Posts from '../components/posts';
import Section from '../components/section';
import { flatten } from '../components/tools';

function Archive({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <App title="Archive">
      <Section>
        <Posts posts={flatten(posts)} />
      </Section>
    </App>
  );
}

Archive.propTypes = {
  data: PropTypes.shape().isRequired,
};

export const pageQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: {type: {in: ["photo", "article", "friends"] }  }}
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

export default withRoot(Archive);
