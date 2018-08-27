import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import withRoot from '../withRoot';
import App from '../components/layout';
import CardPost from '../components/cardPost';
import Map from '../components/map';
import { coordinates, capitalize } from '../components/tools';


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
  cardSpacer: {
    paddingRight: theme.spacing.unit * 2,
  }
});

function List({
  pageContext, classes,
}) {
  const {
    posts, title, type, pagesSum, page,
  } = pageContext;
  const coords = coordinates(posts);
  return (
    <App title={`OAsome blog - ${capitalize(title)}`}>
      <Grid container spacing={24} className={classes.spacer}>
        {type !== 'tag'
          && (
            <Grid item sm={12} className={classes.paperSpacer}>
              <Map cities={coords} zoom={3} center={_.sample(coords).coordinates} />
            </Grid>
          )
        }
        {posts.map(post => (
          <Grid item xs={12} sm={6} key={post.id} className={classes.cardSpacer}>
            <CardPost
              key={post.frontmatter.title}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              cover={post.frontmatter.cover}
              tags={post.frontmatter.tags}
              country={post.frontmatter.country}
              timeToRead={post.timeToRead}
              type={type}
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
      <MobileStepper
        variant="dots"
        steps={pagesSum}
        position="static"
        activeStep={page}
        nextButton={(
          <Button size="small" href={`/${type}/${title}/page/${page + 1}`} disabled={page === pagesSum}>
            Next
            <KeyboardArrowRight />
          </Button>
        )}
        backButton={(
          <Button size="small" href={`/${type}/${page === 2 ? title : `${title}/page/${page - 1}`}/`} disabled={page === 1}>
            <KeyboardArrowLeft />
            Back
          </Button>
        )}
      />
    </App>
  );
}

List.propTypes = {
  classes: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape().isRequired,
};

export default withRoot(withStyles(styles)(List));
