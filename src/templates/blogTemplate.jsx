import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import withRoot from '../withRoot';
import App from '../components/layout';
import CardPost from '../components/cardPost';


const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  text: {
    ...theme.typography.body1,
  },
});

function BlogPost({
  data, classes, pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data; // data.markdownRemark holds our post data
  const { similar } = pageContext;
  const { siteMetadata: { siteUrl } } = site;
  const {
    frontmatter,
    html,
    excerpt,
    timeToRead,
  } = markdownRemark;
  return (
    <App title="OAsome blog">
      <Helmet>
        <title>
          {frontmatter.title}
        </title>
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={frontmatter.tags} />
        <meta property="og:site_name" content="OAsome secrets" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:url" content={`${siteUrl}${frontmatter.path}`} />
        <meta property="og:image" content={`${siteUrl}${frontmatter.cover.childImageSharp.fluid.src}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:url" content={`${siteUrl}${frontmatter.path}`} />
        <meta name="twitter:image" content={`${siteUrl}${frontmatter.cover.childImageSharp.fluid.src}`} />
      </Helmet>
      <Grid container spacing={24} className={classes.spacer}>
        <CardPost
          title={frontmatter.title}
          date={frontmatter.date}
          cover={frontmatter.cover}
          tags={frontmatter.tags}
          content={<div className={classes.text} dangerouslySetInnerHTML={{ __html: html }} />}
          expand={false}
          photos={frontmatter.photos || []}
          type={frontmatter.type}
          timeToRead={timeToRead}
        />
      </Grid>
      {similar.length > 0
        && (
          <Grid container spacing={24} className={classes.spacer}>
            <Grid item xs={12}>
              <Typography variant="display1">
                Similar articles
              </Typography>
            </Grid>
            {similar.filter(post => post.frontmatter.title !== frontmatter.title).slice(0, 8).map(post => (
              <Grid item xs={4} key={post.frontmatter.title}>
                <CardPost
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  cover={post.frontmatter.cover}
                  tags={post.frontmatter.tags}
                  timeToRead={post.timeToRead}
                  type={post.frontmatter.type}
                  content={(
                    <Typography component="p">
                      {post.excerpt}
                    </Typography>
                  )}
                  path={post.frontmatter.path}
                  expand
                />
              </Grid>
            ))}
          </Grid>
        )
      }
    </App>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt(pruneLength: 150)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        type
        country
        photos {
          childImageSharp{
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        cover {
          childImageSharp{
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
    }
  }
`;


BlogPost.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape().isRequired,
};

export default withRoot(withStyles(styles)(BlogPost));
