import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import withRoot from '../withRoot';
import App from '../components/layout';
import Posts from '../components/posts';

const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
});

function Archive({
  classes, data,
}) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <App title="Archive of the OAsome land">
      <Grid container spacing={24} className={classes.spacer}>
        <Posts posts={posts} />
      </Grid>
    </App>
  );
}

Archive.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
};

export const pageQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
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
            cover {
              childImageSharp {
                fluid(maxWidth: 1200) {
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

export default withRoot(withStyles(styles)(Archive));
