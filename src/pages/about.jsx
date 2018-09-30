import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { graphql } from 'gatsby';


import withRoot from '../withRoot';
import Section from '../components/section';
import Seo from '../components/seo';
import App from '../components/layout';
import { markdownStyle } from '../components/tools';


const styles = theme => ({
  spacer: {
    marginBottom: theme.spacing.unit * 2,
  },
  paperSpacer: {
    paddingBottom: theme.spacing.unit,
  },
  markdown: markdownStyle(theme),
});

function Error({
  classes, data,
}) {
  return (
    <Fragment>
      <Seo
        postImage={data.file.childImageSharp.fluid.src}
        postData={{
          frontmatter: {
            title: 'About this blog - OAsome blog',
            path: '/about/',
          },
        }}
      />
      <App title="About this blog">
        <Section>
          <Grid item sm={2} />
          <Grid item xs={12} sm={8} className={classes.paperSpacer}>
            <Paper className={classes.markdown}>
              <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </Paper>
          </Grid>
          <Grid item sm={2} />
        </Section>
      </App>
    </Fragment>
  );
}

export const pageQuery = graphql`
  query AboutQuery {
    file(relativePath: { eq: "about/up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    markdownRemark(
      frontmatter: { path: { eq: "/about" } }
    ) {
      html
      frontmatter {
        path
      }
    }
  }
`;

Error.propTypes = {
  classes: PropTypes.shape().isRequired,
  data: PropTypes.shape().isRequired,
};

export default withRoot(withStyles(styles)(Error));
