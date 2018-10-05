import React, { Fragment } from 'react';
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
import Seo from '../components/seo';


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
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { similar } = pageContext;
  const {
    frontmatter,
    htmlAst,
    timeToRead,
    tableOfContents,
  } = markdownRemark;
  return (
    <Fragment>
      <Seo
        key={`seo-${frontmatter.title}`}
        postImage={frontmatter.cover.childImageSharp.fluid.src}
        postData={markdownRemark}
      />
      <App title="OAsome blog">
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
    </Fragment>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
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
        duration
        cover {
          childImageSharp{
            fluid(maxHeight: 450, maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
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
