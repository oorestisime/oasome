import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import withRoot from '../withRoot';
import App from '../components/layout';
import Posts from '../components/posts';
import Map from '../components/map';
import { coordinates } from '../components/tools';


const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  paperSpacer: {
    padding: theme.spacing.unit * 2,
    paddingBotton: theme.spacing.unit * 4,
  },
});

function Index({
  classes, data,
}) {
  const { edges: posts } = data.allMarkdownRemark;
  const coords = coordinates(posts.map(post => post.node));
  return (
    <App title="OAsome land">
      <Grid container spacing={24} className={classes.spacer}>
        <Grid item sm={12} className={classes.paperSpacer}>
          <Map cities={coords} />
        </Grid>
        <Posts posts={posts} />
      </Grid>
    </App>
  );
}

Index.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 6
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
            coordinates {
              name
              country
              coordinates
            }
            cover {
              childImageSharp{
                fluid(maxHeight: 300) {
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

export default withRoot(withStyles(styles)(Index));
