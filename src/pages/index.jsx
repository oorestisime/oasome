import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import withRoot from '../withRoot';
import App from '../components/layout';
import Posts from '../components/posts';
import Map from '../components/map';
import { coordinates } from '../components/tools';

const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
  },
  paperSpacer: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  headline: {
    padding: `${theme.spacing.unit * 2} 0`,
    textAlign: 'center',
  },
  aboutTitle: {
    textDecoration: 'underline',
    paddingBottom: theme.spacing.unit * 2,
  },
  aboutText: {
    fontSize: 16,
    paddingBottom: theme.spacing.unit * 3,
  },
  aboutButton: {
    float: 'center',
  },
});

function Index({
  classes, data,
}) {
  const { edges: posts } = data.allMarkdownRemark;
  const coords = coordinates(posts.map(post => post.node));
  return (
    <App>
      <Grid container spacing={24} className={classes.spacer}>
        <Grid item xs={12}>
          <Typography variant="display1" className={classes.headline}>
            Featured articles
          </Typography>
        </Grid>
        <Posts posts={posts} />
        <Grid item xs={12}>
          <Typography variant="display1" className={classes.headline}>
            About us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paperSpacer}>
            <Typography variant="display1" className={classes.aboutTitle}>
              We are A and O
            </Typography>
            <Typography className={classes.aboutText}>
              Hello there and welcome to the OAsome blog.
              This is a blog of couple who guess what, their initials start with an A and an O.
              They both really like visiting new places, finding out about interesting adventures
              and take casual photos.
              <br />
              <br />
              This blog also gives an area for friends to share some of their
              experiences or fandfull trips they find out during their travel adventures
            </Typography>
            <Link to="/about">
              <Button className={classes.aboutButton} variant="raised" color="primary">
                Read more
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Img fluid={data.file.childImageSharp.fluid} alt="Logo" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="display1" className={classes.headline}>
            Where we have been!
          </Typography>
        </Grid>
        <Map cities={coords} />
        <Grid item xs={12}>
          <Typography variant="display1" className={classes.headline}>
            Latest articles
          </Typography>
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
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
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
              country
              coordinates
            }
            country
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
