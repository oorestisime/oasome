import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import rehypeReact from 'rehype-react';

import PhotoComposition from '../components/photoComposition';
import Tip from '../components/tip';
import withRoot from '../withRoot';
import Section from '../components/section';
import App from '../components/layout';
import CardPost from '../components/cardPost';
import { markdownStyle } from '../components/tools';
import Posts from '../components/posts';
import TripDetails from '../components/tripNotes';


const styles = theme => ({
  text: markdownStyle(theme),
  toc: {
    top: 90,
    flexShrink: 0,
    order: 2,
    position: 'sticky',
    wordBreak: 'break-word',
    height: 'calc(100vh - 70px)',
    overflowY: 'auto',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 4,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& $ul': {
      paddingLeft: theme.spacing.unit * 3,
      margin: 0,
      listStyleType: 'none',
    },
    '& $li': {
      fontSize: 14,
      padding: `${theme.spacing.unit / 2}px 0`,
    },
    '& $a': {
      color: 'rgba(0, 0, 0, 0.54)',
      textDecoration: 'none',
      '&:hover': {
        color: 'black',
      },
    },
  },
});

const renderAst = new rehypeReact({ // eslint-disable-line new-cap
  createElement: React.createElement,
  components: {
    'photo-composition': PhotoComposition,
    tip: Tip,
  },
}).Compiler;

function BlogPost({
  data, classes, pageContext, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data; // data.markdownRemark holds our post data
  const { similar } = pageContext;
  const { siteMetadata: { siteUrl } } = site;
  const {
    frontmatter,
    htmlAst,
    excerpt,
    timeToRead,
    tableOfContents,
  } = markdownRemark;
  return (
    <App title="OAsome blog">
      <Helmet>
        <title>
          {frontmatter.title}
        </title>
        <meta name="description" content={excerpt} />
        <meta name="keywords" content={frontmatter.tags.join()} />
        <meta property="og:site_name" content="Oasome blog" />
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
      <Section>
        <Grid item xs={12} sm={9}>
          <CardPost
            title={frontmatter.title}
            date={frontmatter.date}
            cover={frontmatter.cover}
            tags={frontmatter.tags}
            content={(
              <div className={classes.text}>
                {renderAst(htmlAst)}
              </div>
            )}
            expand={false}
            type={frontmatter.type}
            timeToRead={timeToRead}
            country={frontmatter.country}
          />
        </Grid>
        <Grid item sm={3}>
          {frontmatter.km && (
            <TripDetails
              km={frontmatter.km}
              itinerary={frontmatter.itinerary}
              duration={frontmatter.duration}
            />
          )}
          <div className={classes.toc}>
            <Typography variant="headline" gutterBottom>
              Contents
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: tableOfContents }} />
          </div>
        </Grid>
      </Section>
      {similar.length > 1
        && (
          <Section shade="300">
            <Grid item xs={12}>
              <Typography variant="display1">
                Similar articles
              </Typography>
            </Grid>
            <Posts
              posts={similar.filter(
                post => post.frontmatter.title !== frontmatter.title,
              ).slice(0, 8)}
            />
          </Section>
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
    markdownRemark(
      frontmatter: {
        path: { eq: $path },
        type: { in: ["photo", "article"] }
      }
    ) {
      htmlAst
      timeToRead
      tableOfContents(pathToSlugField: "frontmatter.path")
      excerpt(pruneLength: 150)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
        type
        country
        km
        itinerary
        cover {
          childImageSharp{
            fluid(maxHeight: 450, maxWidth: 800, quality: 100) {
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
