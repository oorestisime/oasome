import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CardPost from './cardPost';


const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  chip: {
    margin: theme.spacing.unit,
  },
  title: {
    textDecoration: 'none',
  },
  spacer: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Posts({
  classes, posts,
}) {
  if (posts.length > 0) {
    return posts.map(post => (
      <Grid item xs={12} sm={6} md={4} key={post.id} className={classes.spacer}>
        <CardPost
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          cover={post.frontmatter.cover}
          tags={post.frontmatter.tags}
          country={post.frontmatter.country}
          timeToRead={post.timeToRead}
          content={(
            <Typography component="p">
              {post.excerpt}
            </Typography>
          )}
          path={post.frontmatter.path}
          expand
          type="list"
        />
      </Grid>
    ));
  }
}

Posts.propTypes = {
  classes: PropTypes.shape().isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(Posts);
